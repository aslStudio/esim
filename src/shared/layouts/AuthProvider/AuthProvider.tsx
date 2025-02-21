import React, {useEffect} from "react"
import {useUnit} from "effector-react"

import {TransitionFade} from "@/shared/ui/TransitionFade"
import {LottieAnimation} from "@/shared/ui/LottieAnimation"
import {useTelegram} from "@/shared/lib/hooks"
import {useLanguageProvider} from "@/shared/lib/providers"
import {Button} from "@/shared/ui/Button"

import { authModel } from './model'
import styles from './AuthProvider.module.scss'

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
    children
}) => {
    const [
        isPending,
        isLoggedIn,
        login,
    ] = useUnit([
        authModel.$isPending,
        authModel.$isLoggedIn,
        authModel.login,
    ])

    const { BackButton } = useTelegram()
    const { content } = useLanguageProvider()

    const {
        title,
        description,
        button
    } = content.pages.auth

    useEffect(() => {
        if (isLoggedIn) {
            BackButton?.show()
        } else {
            BackButton?.hide()
        }
    }, [isLoggedIn]);

    return (
        <TransitionFade>
            {!isLoggedIn && (
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
                    <Button
                        isLoading={isPending}
                        onClick={login}
                    >
                        {button}
                    </Button>
                </div>
            )}
            {isLoggedIn && (
                <>
                    {children}
                </>
            )}
        </TransitionFade>
    )
}