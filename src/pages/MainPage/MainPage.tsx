import {useEffect} from "react"

import {ViewerInfo} from "@/widgets/viewer"
import {EsimList} from "@/widgets/esim"

import {Button} from "@/shared/ui/Button"
import {useLanguageProvider} from "@/shared/lib/providers"
import {useTelegram} from "@/shared/lib/hooks/useTelegram.ts"

import styles from './MainPage.module.scss'

export const MainPage = () => {
    const { BackButton } = useTelegram()
    const { content } = useLanguageProvider()

    const { button } = content.pages.main

    useEffect(() => {
        BackButton?.hide()
    }, [BackButton])

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