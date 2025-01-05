import {useEffect} from "react"
import {useParams} from "react-router-dom"
import {reflect} from "@effector/reflect"

import {esimExpandModel} from "@/entities/esim/model"

import {useProjectNavigate, useTelegram} from "@/shared/lib/hooks"

import {
    EsimQR,
    ButtonDownload,
    HowTo,
    ManualInstallation,
    BeforeUsing
} from './ui'
import styles from './EsimPage.module.scss'

export const EsimPage = () => {
    const params = useParams()
    const { goBack } = useProjectNavigate()

    const { BackButton } = useTelegram()

    useEffect(() => {
        if (params.id) {
            esimExpandModel.esimRequested(`${params.id}`)
        }
    }, [params]);

    useEffect(() => {
        BackButton?.show()
        BackButton?.onClick(goBack)
    }, [BackButton, goBack])

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
        data: esimExpandModel.$data,
        isLoading: esimExpandModel.$isPending,
    }
})

const ButtonDowloadReflect = reflect({
    view: ButtonDownload,
    bind: {
        data: esimExpandModel.$data,
        isLoading: esimExpandModel.$isPending,
    }
})

const ManualInstallationReflect = reflect({
    view: ManualInstallation,
    bind: {
        data: esimExpandModel.$data,
        isLoading: esimExpandModel.$isPending,
    }
})