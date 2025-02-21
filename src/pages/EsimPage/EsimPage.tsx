import {useEffect} from "react"
import {reflect} from "@effector/reflect"

import {expandModule} from "@/entities/esim/model"

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

export const EsimPage = () => {
    const { navigate } = useProjectNavigate()

    const { BackButton } = useTelegram()

    useEffect(() => {
        BackButton?.show()
        BackButton?.onClick(() => {
            navigate(RootPaths.MAIN)
        })
    }, [BackButton, navigate])

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <p className={styles.title}>Installing the eSIM</p>
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