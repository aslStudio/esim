import {useEffect} from "react"

import {CreateEsimPaymentMethod} from "@/widgets/esim/CreateEsimPaymentMethod"

import {useProjectNavigate, useTelegram} from "@/shared/lib/hooks"
import {useLanguageProvider} from "@/shared/lib/providers"

import styles from './CreateEsimPaymentMethodPage.module.scss'
import {Icon} from "@/shared/ui/Icon";
import {Button} from "@/shared/ui/Button";

export const CreateEsimPaymentMethodPage = () => {
    const { goBack } = useProjectNavigate()

    const { BackButton } = useTelegram()
    const { content } = useLanguageProvider()
    const { title, alert, button } = content.pages.create.paymentMethod

    useEffect(() => {
        BackButton?.show()
        BackButton?.onClick(goBack)
    }, [BackButton, goBack])

    return (
        <div className={styles.root}>
            <p className={styles.title}>{title}</p>
            <CreateEsimPaymentMethod
                className={styles.list}
            />
            <div className={styles.button}>
                <div className={styles.alert}>
                    <Icon
                        name={'smile'}
                        view={'button'}
                        size={28}
                    />
                    <div>
                        <p>{alert[0]}</p>
                        <p>{alert[1]}</p>
                    </div>
                </div>
                <Button
                    onClick={() => {}}
                >
                    {button}
                </Button>
            </div>
        </div>
    )
}