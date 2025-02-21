import {useCallback, useEffect} from "react"
import {useUnit} from "effector-react"
import {useTonConnectUI} from "@tonconnect/ui-react"

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
        data,
        transactionData
    ] = useUnit([
        createEsimModel.$data,
        createEsimModel.$transactionData
    ])

    const [tonConnectUI] = useTonConnectUI()
    const { BackButton } = useTelegram()
    const { isOpen, open, close } = useModal()
    const { content } = useLanguageProvider()
    const {
        title,
        description,
        button,
        modal
    } = content.pages.create.done

    const onPay = useCallback(() => {
        try {
            if (transactionData) {
                tonConnectUI.sendTransaction({
                    validUntil: new Date(transactionData.result.valid_until).getTime(),
                    messages: [
                        {
                            address: transactionData.result.tx_fill_info.receiver,
                            amount: transactionData.result.tx_fill_info.amount,
                            payload: transactionData.result.tx_fill_info.payload,
                        }
                    ]
                })
            }

            navigate(RootPaths.MAIN)
        } catch (e) {
            console.log(e)
        }
    }, [transactionData])

    useEffect(() => {
        open()
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
                <Button
                    onClick={onPay}
                >
                    <div className={styles['modal-button']}>
                        {modal.button}
                        <MajorIcon />
                        {data.tariff?.price}
                    </div>
                </Button>
            </Modal>
        </>
    )
}