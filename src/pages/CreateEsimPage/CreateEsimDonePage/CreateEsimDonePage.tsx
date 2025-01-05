import {LottieAnimation} from "@/shared/ui/LottieAnimation"
import {useLanguageProvider} from "@/shared/lib/providers"
import {Button} from "@/shared/ui/Button"
import {Modal, useModal} from "@/shared/ui/Modal"

import styles from './CreateEsimDonePage.module.scss'
import {useUnit} from "effector-react";
import {createEsimModel} from "@/features/create/model";
import {PaymentType} from "@/shared/api/enum.ts";
import {AnimatedIcon} from "@/shared/ui/AnimatedIcon";

export const CreateEsimDonePage = () => {
    const [
        data
    ] = useUnit([
        createEsimModel.$data
    ])

    const {isOpen, open, close} = useModal()
    const { content } = useLanguageProvider()
    const {
        title,
        description,
        button,
        modal
    } = content.pages.create.done

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
                            .replace('__', `${data.paymentType === PaymentType.STARS ? `${data.tariff?.stars} Stars` : `${data.tariff?.major} Major`}`)
                    }
                </p>
                <Button
                    onClick={close}
                >
                    <div className={styles['modal-button']}>
                        {modal.button}
                        <AnimatedIcon
                            name={'star-white'}
                            size={22}
                        />
                        {data.tariff?.stars}
                    </div>
                </Button>
            </Modal>
        </>
    )
}