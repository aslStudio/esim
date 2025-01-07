import {useEffect} from "react"
import {useUnit} from "effector-react"
import {reflect} from "@effector/reflect"

import {createEsimModel} from "@/features/create/model"

import {tariffListModel} from "@/entities/tariff/model"
import {TariffCardList, TariffCardListSkeleton} from "@/entities/tariff/ui"
import {availableCountriesModel} from "@/entities/region/model"

import {useProjectNavigate, useTelegram} from "@/shared/lib/hooks"
import {useLanguageProvider} from "@/shared/lib/providers"
import {Button} from "@/shared/ui/Button"
import {TransitionFade} from "@/shared/ui/TransitionFade"
import {CardCollapse} from "@/shared/ui/CardCollapse"
import {CreatePaths, RootPaths} from "@/shared/lib"
import {SkeletonWrapper} from "@/shared/ui/SkeletonWrapper"

import styles from './CreateEsimTariffPage.module.scss'
import {Icon} from "@/shared/ui/Icon";

export const CreateEsimTariffPage = () => {
    const { goBack, navigate } = useProjectNavigate()

    const [
        isPending,
        count,
    ] = useUnit([
        tariffListModel.$isPending,
        availableCountriesModel.$count,
    ])

    const { BackButton } = useTelegram()
    const { content } = useLanguageProvider()
    const { title, next, availableTitle, noPhone } = content.pages.create.tariff

    useEffect(() => {
        BackButton?.show()
        BackButton?.onClick(goBack)
    }, [BackButton, goBack])

    return (
        <div className={styles.root}>
            <h1 className={styles.title}>{title}</h1>
            <TransitionFade className={styles.list}>
                {isPending && (
                    <SkeletonWrapper>
                        <TariffCardListSkeleton
                            key={'Skeleton'}
                        />
                    </SkeletonWrapper>
                )}
                {!isPending && (
                    <>
                        <TariffListReflect
                            key={'Content'}
                        />
                        <AvailableCountriesReflect
                            title={`${availableTitle}: ${count}`}
                            size={'m'}
                        />
                        <div className={styles['no-phone']}>
                            <Icon
                                name={'phone-slash'}
                                view={'secondary'}
                                size={24}
                            />
                            <div>
                                <p>{noPhone[0]}</p>
                                <p>{noPhone[1]}</p>
                            </div>
                        </div>
                    </>
                )}
            </TransitionFade>
            <ButtonReflect
                className={styles.button}
                onClick={() => {
                    navigate(
                        RootPaths.CREATE,
                        CreatePaths.PAYMENT,
                    )
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

const AvailableCountriesReflect = reflect({
    view: CardCollapse,
    bind: {
        isLoading: availableCountriesModel.$isPending,
        children: availableCountriesModel.$countriesString,
    }
})

const ButtonReflect = reflect({
    view: Button,
    bind: {
        isDisabled: createEsimModel.$data.map(state => !state.tariff)
    }
})