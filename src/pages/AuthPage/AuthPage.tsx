import {LottieAnimation} from "@/shared/ui/LottieAnimation"
import {useLanguageProvider} from "@/shared/lib/providers"
import {Button} from "@/shared/ui/Button"

import styles from './AuthPage.module.scss'

export const AuthPage = () => {
    const { content } = useLanguageProvider()

    const {
        title,
        description,
        button
    } = content.pages.auth

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
            <Button
                onClick={() => {}}
            >
                {button}
            </Button>
        </div>
    )
}