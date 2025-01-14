import {useEffect} from "react"
import {reflect} from "@effector/reflect"
import {useUnit} from "effector-react"

import {createEsimModel} from "@/features/create/model"

import {LottieAnimation} from "@/shared/ui/LottieAnimation"
import {useLanguageProvider} from "@/shared/lib/providers"
import {Button} from "@/shared/ui/Button"
import {Modal, useModal} from "@/shared/ui/Modal"
import {useProjectNavigate, useTelegram} from "@/shared/lib/hooks"
import {MajorIcon} from "@/shared/ui/MajorIcon"
import {RootPaths} from "@/shared/lib"

import styles from './CreateEsimDonePage.module.scss'

export const CreateEsimDonePage = () => {
    const { navigate, goBack } = useProjectNavigate()

    const [
        data
    ] = useUnit([
        createEsimModel.$data
    ])

    const { BackButton } = useTelegram()
    const { isOpen, open, close } = useModal()
    const { content } = useLanguageProvider()
    const {
        title,
        description,
        button,
        modal
    } = content.pages.create.done

    useEffect(() => {
        open()
        createEsimModel.onSuccess.set(id => {
            close()
            navigate(
                RootPaths.ESIM.replace(':id', `${id}`)
            )
        })
    }, [])

    useEffect(() => {
        BackButton?.show()
        BackButton?.onClick(goBack)
    }, [BackButton, goBack])

    return (
        <>
            <div className={styles.root}>
                <LottieAnimation
                    name={'go-link'}
                    width={232}
                    height={232}
                />
                <h2 className={styles.title}>{title}</h2>
                <h2 className={styles.description}>{description}</h2>

                <Button
                    className={styles.button}
                    onClick={open}
                >
                    {button}
                </Button>
            </div>
            <Modal
                isOpen={isOpen}
                setIsOpen={close}
            >
                <LottieAnimation
                    name={'pin-code'}
                    width={128}
                    height={128}
                />
                <p
                    className={styles['modal-title']}
                >
                    {modal.title}
                </p>
                <p
                    className={styles['modal-description']}
                >
                    {
                        modal.description
                            .replace('_', `${data.region?.name} ${data.tariff?.size}GB/${data.tariff?.days}`)
                            .replace('__', `${data.tariff?.price} Major`)
                    }
                </p>
                <CreateButtonReflect>
                    <div className={styles['modal-button']}>
                        {modal.button}
                        <MajorIcon />
                        {data.tariff?.price}
                    </div>
                </CreateButtonReflect>
            </Modal>
        </>
    )
}

const CreateButtonReflect = reflect({
    view: Button,
    bind: {
        isLoading: createEsimModel.$isPending,
        onClick: createEsimModel.esimCreated
    }
})