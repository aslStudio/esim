import {Outlet} from "react-router-dom"
import {useUnit} from "effector-react"

import {CreateEsimStepper, useCreateEsimStep} from "@/widgets/esim"

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
            {activeStepNumber > 1 && data.region && (
                <RegionCell
                    cell={data.region}
                    isInteractive={false}
                />
            )}
            <Outlet />
        </div>
    )
}