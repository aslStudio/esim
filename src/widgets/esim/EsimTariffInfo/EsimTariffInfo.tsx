import React, {useMemo} from "react"
import {clsx} from "clsx"
import {useUnit} from "effector-react"

import {createEsimModel} from "@/features/create/model"

import {PropsDefault} from "@/shared/lib"
import {MajorIcon} from "@/shared/ui/MajorIcon"
import {RegionType} from "@/shared/api/enum.ts"
import {publicPaths} from "@/shared/assets/public.ts"

import styles from './EsimTariffInfo.module.scss'

export const EsimTariffInfo: React.FC<PropsDefault> = ({
    className
}) => {
    const [
        data,
    ] = useUnit([
        createEsimModel.$data
    ])

    const imgPath = useMemo(() => {
        if (data.region?.type === RegionType.COUNTRY) {
            return `https://p.qrsim.net${data.region?.avatar}`
        }

        const name = data.region?.name.toLowerCase().split(' ').join('_')

        return publicPaths.regions[name as keyof typeof publicPaths.regions]
    }, [data.region])

    if (!data.region || !data.tariff) {
        return null
    }

    return (
        <div
            className={clsx(
                styles.root,
                className,
            )}
        >
            <div className={styles.header}>
                <div className={styles.info}>
                    <p className={styles.name}>{data.region?.name}</p>
                    <p className={styles.data}>{data.tariff?.size} GB / {data.tariff?.days} Days</p>
                </div>
                <div className={styles.avatar}>
                    <img
                        src={imgPath}
                        alt={'avatar'}
                    />
                </div>
            </div>
            <div
                className={styles.divider}
            />
            <div className={styles.body}>
                <p className={styles.total}>Total:</p>
                <div className={styles.price}>
                    <MajorIcon />
                    <p
                        className={styles.stars}
                    >
                        {data.tariff?.price}
                    </p>
                    <p
                        className={styles.dollars}
                    >
                        ${data.tariff?.dollars}
                    </p>
                </div>
            </div>
        </div>
    )
}