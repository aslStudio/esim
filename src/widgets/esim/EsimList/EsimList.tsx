import {useEffect, useState} from "react"
import {useUnit} from "effector-react"
import {reflect} from "@effector/reflect"

import {esimListModel} from "@/entities/esim/model"
import {EsimCardList, EsimCardListSkeleton, NotPayedEsimCard} from "@/entities/esim/ui"

import {Icon} from "@/shared/ui/Icon"
import {TransitionFade} from "@/shared/ui/TransitionFade"
import {SkeletonWrapper} from "@/shared/ui/SkeletonWrapper"
import {useLanguageProvider} from "@/shared/lib/providers"
import {useProjectNavigate, useTelegram} from "@/shared/lib/hooks"

import styles from './EsimList.module.scss'
import {CreatePaths, RootPaths} from "@/shared/lib";

let interval: ReturnType<typeof setInterval>

export const EsimList = () => {
    const { navigate } = useProjectNavigate()

    const { isLoading } = esimListModel.useFetchGate()
    const [showedList, hiddenList, notPayed] = useUnit([esimListModel.$showedList, esimListModel.$hiddenList, esimListModel.$notPayed])

    const { haptic } = useTelegram()
    const { content } = useLanguageProvider()
    const { title, button } = content.widgets.esim.EsimList

    const [isShowHidden, setIsShowHidden] = useState(false)

    useEffect(() => {
        clearInterval(interval)
        interval = setInterval(() => {
            esimListModel.refetchNotPayedFx().then()
        }, 10_000)
    }, [notPayed]);

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <p className={styles.title}>{title}</p>
                <button
                    className={styles.toggle}
                    onClick={() => {
                        setIsShowHidden(!isShowHidden)
                    }}
                >
                    <Icon
                        name={isShowHidden ? 'eye-closed' : 'eye'}
                        view={'secondary'}
                        size={24}
                    />
                    <p>{isShowHidden ? button.hide : button.show}</p>
                </button>
            </div>
            <TransitionFade
                className={styles.wrapper}
            >
                {isLoading && (
                    <SkeletonWrapper>
                        <EsimCardListSkeleton
                            key={'Skeleton'}
                        />
                    </SkeletonWrapper>
                )}
                {!isLoading && (
                    <>
                        {
                            ((showedList.length === 0 && !isShowHidden) || (showedList.length === 0 && isShowHidden && hiddenList.length === 0)) && !notPayed && (
                            <div
                                className={styles.empty}
                                onClick={() => {
                                    haptic()
                                    navigate(
                                        RootPaths.CREATE,
                                        CreatePaths.REGION
                                    )
                                }}
                            >
                                <p className={styles.plus}>+</p>
                                <p className={styles['empty-text']}>Order eSIM</p>
                            </div>
                        )}
                        {notPayed && (
                            <NotPayedEsimCard
                                {...notPayed}
                            />
                        )}
                        <ShowListReflect />
                        {isShowHidden && (
                            <HiddenListReflect />
                        )}
                    </>
                )}
            </TransitionFade>
        </div>
    )
}

const ShowListReflect = reflect({
    view: EsimCardList,
    bind: {
        list: esimListModel.$showedList,
    }
})

const HiddenListReflect = reflect({
    view: EsimCardList,
    bind: {
        list: esimListModel.$hiddenList,
    }
})