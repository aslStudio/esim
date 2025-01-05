import {useEffect} from "react"
import {useUnit} from "effector-react"

import {ViewerInfo} from "@/widgets/viewer"
import {EsimList} from "@/widgets/esim"

import {Button} from "@/shared/ui/Button"
import {useLanguageProvider} from "@/shared/lib/providers"
import {useTelegram} from "@/shared/lib/hooks/useTelegram.ts"
import {useProjectNavigate} from "@/shared/lib/hooks"
import {CreatePaths, RootPaths} from "@/shared/lib"
import {TransitionFade} from "@/shared/ui/TransitionFade"
import {esimListModel} from "@/entities/esim/model"

import styles from './MainPage.module.scss'

export const MainPage = () => {
    const { BackButton } = useTelegram()
    const { content } = useLanguageProvider()
    const { navigate } = useProjectNavigate()

    const isLoading = useUnit(esimListModel.$isPending)

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
            <TransitionFade
                className={styles.button}
            >
                {!isLoading && (
                    <Button
                        onClick={() => {
                            navigate(
                                RootPaths.CREATE,
                                CreatePaths.REGION
                            )
                        }}
                    >
                        {button}
                    </Button>
                )}
            </TransitionFade>
        </div>
    )
}