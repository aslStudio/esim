import {useEffect} from "react"
import {reflect} from "@effector/reflect"

import {createEsimModel} from "@/features/create/model"

import {useProjectNavigate, useTelegram} from "@/shared/lib/hooks"
import {useLanguageProvider} from "@/shared/lib/providers"
import {Button} from "@/shared/ui/Button"

import styles from './CreateEsimTariffPage.module.scss'
import {TransitionFade} from "@/shared/ui/TransitionFade";
import {useUnit} from "effector-react";
import {tariffListModel} from "@/entities/tariff/model";
import {TariffCardList, TariffCardListSkeleton} from "@/entities/tariff/ui";

export const CreateEsimTariffPage = () => {
    const { goBack } = useProjectNavigate()

    const [
        isPending
    ] = useUnit([
        tariffListModel.$isPending,
    ])

    const { BackButton } = useTelegram()
    const { content } = useLanguageProvider()
    const { title, next } = content.pages.create.tariff

    useEffect(() => {
        BackButton?.show()
        BackButton?.onClick(goBack)
    }, [BackButton, goBack])

    return (
        <div className={styles.root}>
            <h1 className={styles.title}>{title}</h1>
            <TransitionFade>
                {isPending && (
                    <TariffCardListSkeleton
                        key={'Skeleton'}
                    />
                )}
                {!isPending && (
                    <TariffListReflect
                        key={'Content'}
                    />
                )}
            </TransitionFade>
            <ButtonReflect
                className={styles.button}
                onClick={() => {
                    console.log('button')
                }}
            >
                {next}
            </ButtonReflect>
        </div>
    )
}

const TariffListReflect = reflect({
    view: TariffCardList,
    bind: {
        list: tariffListModel.$list,
        value: createEsimModel.$data.map(data => data.tariff),
        setValue: createEsimModel.tariffUpdated,
    }
})

const ButtonReflect = reflect({
    view: Button,
    bind: {
        isDisabled: createEsimModel.$data.map(state => !state.region)
    }
})