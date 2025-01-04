import {ViewerInfo} from "@/widgets/viewer"
import {EsimList} from "@/widgets/esim"

import {Button} from "@/shared/ui/Button"
import {useLanguageProvider} from "@/shared/lib/providers"

import styles from './MainPage.module.scss'

export const MainPage = () => {
    const { content } = useLanguageProvider()

    const { button } = content.pages.main

    return (
        <div className={styles.root}>
            <ViewerInfo
                isInteractive={true}
            />
            <EsimList />
            <Button
                className={styles.button}
                onClick={() => {}}
            >
                {button}
            </Button>
        </div>
    )
}