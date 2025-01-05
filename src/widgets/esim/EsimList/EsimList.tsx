import {useState} from "react"

import {esimListModel} from "@/entities/esim/model"

import {Icon} from "@/shared/ui/Icon"
import {TransitionFade} from "@/shared/ui/TransitionFade"

import styles from './EsimList.module.scss'
import {EsimCardList, EsimCardListSkeleton} from "@/entities/esim/ui";
import {reflect} from "@effector/reflect";
import {SkeletonWrapper} from "@/shared/ui/SkeletonWrapper";

export const EsimList = () => {
    const { isLoading } = esimListModel.useFetchGate()

    const [isShowHidden, setIsShowHidden] = useState(false)

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <p className={styles.title}>Yours eSIMS</p>
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
                    <p>{isShowHidden ? 'hide archive' : 'show archive'}</p>
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