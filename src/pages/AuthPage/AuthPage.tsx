import {useEffect} from "react"
import {reflect} from "@effector/reflect"

import {loginModel} from "@/features/auth/model"

import {LottieAnimation} from "@/shared/ui/LottieAnimation"
import {useLanguageProvider} from "@/shared/lib/providers"
import {Button} from "@/shared/ui/Button"
import {RootPaths} from "@/shared/lib"
import {useTelegram} from "@/shared/lib/hooks/useTelegram.ts"
import {useProjectNavigate} from "@/shared/lib/hooks"

import styles from './AuthPage.module.scss'

export const AuthPage = () => {
    const { navigate } = useProjectNavigate()

    const { BackButton } = useTelegram()
    const { content } = useLanguageProvider()

    const {
        title,
        description,
        button
    } = content.pages.auth

    useEffect(() => {
        loginModel.onSuccess.set(() => {
            navigate(RootPaths.MAIN)
        })
        BackButton?.hide()
    }, [navigate, BackButton])

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <LottieAnimation
                    name={'esim'}
                    width={232}
                    height={232}
                />
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.description}>
                    {description.map(item => (
                        <p key={item}>{item}</p>
                    ))}
                </div>
            </div>
            <SubmitButton>
                {button}
            </SubmitButton>
        </div>
    )
}

const SubmitButton = reflect({
    view: Button,
    bind: {
        isLoading: loginModel.$isPending,
        onClick: loginModel.loggedIn
    }
})