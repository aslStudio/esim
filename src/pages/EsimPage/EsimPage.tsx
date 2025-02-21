import {useEffect} from "react"
import {reflect} from "@effector/reflect"

import {ESIMItem, expandModule} from "@/entities/esim/model"

import {useProjectNavigate, useTelegram} from "@/shared/lib/hooks"
import {RootPaths} from "@/shared/lib"

import {
    EsimQR,
    ButtonDownload,
    HowTo,
    ManualInstallation,
    BeforeUsing
} from './ui'
import styles from './EsimPage.module.scss'
import {EsimCard} from "@/entities/esim/ui";
import {useUnit} from "effector-react";

export const EsimPage = () => {
    const { navigate } = useProjectNavigate()

    const { BackButton } = useTelegram()

    const data = useUnit(expandModule.$expand)

    useEffect(() => {
        BackButton?.show()
        BackButton?.onClick(() => {
            navigate(RootPaths.MAIN)
        })
    }, [BackButton, navigate])

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <p className={styles.title}>About eSIM</p>
                <EsimCard
                    className={styles['info-card']}
                    {...data as ESIMItem}
                />
                <EsimQRReflect
                    className={styles.qr}
                />
                <ButtonDowloadReflect
                    className={styles.button}
                />
                <HowTo
                    className={styles['how-to']}
                />
                <ManualInstallationReflect
                    className={styles.manual}
                />
                <BeforeUsing
                    className={styles['before-using']}
                />
            </div>
        </div>
    )
}

const EsimQRReflect = reflect({
    view: EsimQR,
    bind: {
        data: expandModule.$expand,
    }
})

const ButtonDowloadReflect = reflect({
    view: ButtonDownload,
    bind: {
        data: expandModule.$expand,
    }
})

const ManualInstallationReflect = reflect({
    view: ManualInstallation,
    bind: {
        data: expandModule.$expand,
    }
})