import {LanguageSelect, ViewerInfo, ViewerOrders} from "@/widgets/viewer"

import {useLanguageProvider} from "@/shared/lib/providers"
import {useTelegram} from "@/shared/lib/hooks/useTelegram.ts"
import {useProjectNavigate} from "@/shared/lib/hooks"

import styles from './ProfilePage.module.scss'
import {useEffect} from "react";

export const ProfilePage = () => {
    const { goBack } = useProjectNavigate()

    const { BackButton } = useTelegram()
    const { content } = useLanguageProvider()
    const { languageTitle } = content.pages.profile

    useEffect(() => {
        BackButton?.show()
        BackButton?.onClick(goBack)
    }, [BackButton, goBack])

    return (
        <div className={styles.root}>
            <ViewerInfo
                isInteractive={false}
            />
            <ViewerOrders
                className={styles.orders}
            />
            <h3 className={styles['language-title']}>{languageTitle}</h3>
            <LanguageSelect
                className={styles.language}
            />
        </div>
    )
}