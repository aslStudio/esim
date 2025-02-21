import {useCallback, useEffect} from "react"
import {useTonConnectUI, useTonWallet} from "@tonconnect/ui-react"
import {useUnit} from "effector-react"

import {createEsimModel} from "@/features/create/model"

import {useProjectNavigate, useTelegram} from "@/shared/lib/hooks"
import {useLanguageProvider} from "@/shared/lib/providers"
import {Icon} from "@/shared/ui/Icon"
import {Button} from "@/shared/ui/Button"
import {CreatePaths, RootPaths} from "@/shared/lib"

import styles from './CreateEsimPaymentMethodPage.module.scss'

export const CreateEsimPaymentMethodPage = () => {
    const { goBack, navigate } = useProjectNavigate()

    const wallet = useTonWallet()
    const [tonConnectUI] = useTonConnectUI();
    const { BackButton } = useTelegram()
    const { content } = useLanguageProvider()
    const { alert, button, buttonConnect } = content.pages.create.paymentMethod

    const [isPending] = useUnit([createEsimModel.$isPending])

    const onClick = useCallback(async () => {
        if (wallet) {
            createEsimModel.esimCreated()
        } else {
            // await tonConnectUI.disconnect()
            await tonConnectUI.openModal()
        }
    }, [tonConnectUI, wallet])

    useEffect(() => {
        BackButton?.show()
        BackButton?.onClick(goBack)
        createEsimModel.onSuccess.set(() => {
            navigate(
                RootPaths.CREATE,
                CreatePaths.DONE,
            )
        })
    }, [BackButton, goBack])

    return (
        <div className={styles.root}>
            <div className={styles.button}>
                <div className={styles.alert}>
                    <Icon
                        name={'smile'}
                        view={'brand'}
                        size={28}
                    />
                    <div>
                        <p>{alert[0]}</p>
                        <p>{alert[1]}</p>
                    </div>
                </div>
                <Button
                    isLoading={isPending}
                    onClick={onClick}
                >
                    {(tonConnectUI.connected && tonConnectUI.wallet && wallet) ? button : buttonConnect}
                </Button>
            </div>
        </div>
    )
}