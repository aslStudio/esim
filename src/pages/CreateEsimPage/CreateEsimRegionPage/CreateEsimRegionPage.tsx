import {useEffect} from "react"
import {reflect} from "@effector/reflect"

import {RegionFilter} from "@/widgets/region/RegionFilter"

import {createEsimModel} from "@/features/create/model"

import {RegionCellList, RegionCellListSkeleton} from "@/entities/region/ui"
import {regionListModel} from "@/entities/region/model"

import {useLanguageProvider} from "@/shared/lib/providers"
import {TransitionFade} from "@/shared/ui/TransitionFade"
import {Button} from "@/shared/ui/Button"
import { useProjectNavigate, useTelegram } from "@/shared/lib/hooks"
import {CreatePaths, RootPaths} from "@/shared/lib"

import styles from './CreateEsimRegionPage.module.scss'

export const CreateEsimRegionPage = () => {
    const { goBack, navigate } = useProjectNavigate()

    const { isPending } = regionListModel.useFetchRegion()

    const { BackButton } = useTelegram()
    const { content } = useLanguageProvider()
    const { title, next } = content.pages.create.region

    useEffect(() => {
        BackButton?.show()
        BackButton?.onClick(goBack)
    }, [BackButton, goBack])

    return (
        <div className={styles.root}>
            <h1 className={styles.title}>{title}</h1>
            <RegionFilter />
            <TransitionFade
                className={styles.list}
            >
                {isPending && (
                    <RegionCellListSkeleton
                        key={'Skeleton'}
                    />
                )}
                {!isPending && (
                    <ListReflect
                        key={'Content'}
                        onSelect={v => {
                            createEsimModel.regionUpdated(v)
                            navigate(
                                RootPaths.CREATE,
                                CreatePaths.TARIFF
                            )
                        }}
                    />
                )}
            </TransitionFade>
            <ButtonReflect
                className={styles.button}
                onClick={() => {
                    navigate(
                        RootPaths.CREATE,
                        CreatePaths.TARIFF
                    )
                }}
            >
                {next}
            </ButtonReflect>
        </div>
    )
}

const ListReflect = reflect({
    view: RegionCellList,
    bind: {
        list: regionListModel.$list,
    }
})

const ButtonReflect = reflect({
    view: Button,
    bind: {
        isDisabled: createEsimModel.$data.map(state => !state.region)
    }
})