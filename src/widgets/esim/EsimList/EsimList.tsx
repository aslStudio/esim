import {useState} from "react"

import {esimListModel} from "@/entities/esim/model"

import {Icon} from "@/shared/ui/Icon"
import {TransitionFade} from "@/shared/ui/TransitionFade"

import styles from './EsimList.module.scss'
import {EsimCardList, EsimCardListSkeleton} from "@/entities/esim/ui";
import {reflect} from "@effector/reflect";
import {SkeletonWrapper} from "@/shared/ui/SkeletonWrapper";
import {useLanguageProvider} from "@/shared/lib/providers";

export const EsimList = () => {
    const { isLoading } = esimListModel.useFetchGate()

    const { content } = useLanguageProvider()
    const { title, button } = content.widgets.esim.EsimList

    const [isShowHidden, setIsShowHidden] = useState(false)

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