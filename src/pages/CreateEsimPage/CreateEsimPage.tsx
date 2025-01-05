import {Outlet} from "react-router-dom"
import {useUnit} from "effector-react"

import {CreateEsimStepper, EsimTariffInfo, useCreateEsimStep} from "@/widgets/esim"

import {createEsimModel} from "@/features/create/model"

import {RegionCell} from "@/entities/region/ui"

import {useLanguageProvider} from "@/shared/lib/providers"

import styles from './CreateEsimPage.module.scss'

export const CreateEsimPage = () => {
    const { activeStepNumber } = useCreateEsimStep()
    const { content } = useLanguageProvider()
    const { title } = content.pages.create

    const data = useUnit(createEsimModel.$data)

    return (
        <div className={styles.root}>
            <h1 className={styles.title}>{title}</h1>
            <CreateEsimStepper />
            {activeStepNumber === 2 && data.region && (
                <RegionCell
                    className={styles.cell}
                    cell={data.region}
                    isInteractive={false}
                />
            )}
            {activeStepNumber === 3 && (
                <EsimTariffInfo
                    className={styles.cell}
                />
            )}
            <Outlet />
        </div>
    )
}