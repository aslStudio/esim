import {useCallback, useEffect} from "react"
import {useUnit} from "effector-react"
import {useTonConnectUI, useTonWallet} from "@tonconnect/ui-react"

import {createEsimModel} from "@/features/create/model"

import {LottieAnimation} from "@/shared/ui/LottieAnimation"
import {useLanguageProvider} from "@/shared/lib/providers"
import {Button} from "@/shared/ui/Button"
import {Modal, useModal} from "@/shared/ui/Modal"
import {useProjectNavigate, useTelegram} from "@/shared/lib/hooks"
import {MajorIcon} from "@/shared/ui/MajorIcon"
import {RootPaths} from "@/shared/lib"

import styles from './CreateEsimDonePage.module.scss'
import {esimApi} from "@/shared/api/esim";

export const CreateEsimDonePage = () => {
    const { navigate, goBack } = useProjectNavigate()

    const [
        data,
    ] = useUnit([
        createEsimModel.$data,
    ])

    const [tonConnectUI] = useTonConnectUI()
    const wallet = useTonWallet()
    const { BackButton } = useTelegram()
    const { isOpen, open, close } = useModal()
    const { content } = useLanguageProvider()
    const {
        title,
        description,
        button,
        modal
    } = content.pages.create.done

    const onPay = useCallback(async () => {
        try {
            if (wallet) {
                const response = await esimApi.getTransactionData({ wallet: wallet.account.address })
                if (!response.error && response.payload.result) {
                    await tonConnectUI.sendTransaction({
                        validUntil: Math.floor(Date.now() / 1000) + 360,
                        messages: [
                            {
                                address: response.payload.result.receiver,
                                amount: response.payload.result.amount,
                                payload: response.payload.result.payload,
                            }
                        ]
                    })
                }
            }

            await esimApi.checkoutTransaction()
            navigate(RootPaths.MAIN)
        } catch (e) {
            console.log(e)
        }
    }, [wallet])

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