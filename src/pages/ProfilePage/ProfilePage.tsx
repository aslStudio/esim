import {LanguageSelect, ViewerInfo, ViewerOrders} from "@/widgets/viewer"

import styles from './ProfilePage.module.scss'
import {useLanguageProvider} from "@/shared/lib/providers";

export const ProfilePage = () => {
    const { content } = useLanguageProvider()
    const { languageTitle } = content.pages.profile

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