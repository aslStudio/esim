import React from "react"
import {clsx} from "clsx"
import {useUnit} from "effector-react"

import {createEsimModel} from "@/features/create/model"

import {AnimatedIcon} from "@/shared/ui/AnimatedIcon"
import {PaymentType} from "@/shared/api/enum.ts"
import {PropsDefault} from "@/shared/lib"

import styles from './EsimTariffInfo.module.scss'

export const EsimTariffInfo: React.FC<PropsDefault> = ({
    className
}) => {
    const [
        data,
    ] = useUnit([
        createEsimModel.$data
    ])

    if (data.region && data.tariff) {
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
                    <p className={styles.name}>{data.region!.name}</p>
                    <p className={styles.data}>{data.tariff!.size} GB / {data.tariff!.days} Days</p>
                </div>
                <div className={styles.avatar}>
                    <img
                        src={data.region!.avatar}
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
                    <AnimatedIcon
                        name={'star'}
                        size={24}
                    />
                    {data.paymentType === PaymentType.STARS && (
                        <>
                            <p
                                className={styles.stars}
                            >
                                {data.tariff!.stars}
                            </p>
                            <p
                                className={styles.dollars}
                            >
                                ${data.tariff!.dollars}
                            </p>
                        </>
                    )}
                    {data.paymentType === PaymentType.MAJOR && (
                        <>
                            <p
                                className={styles.stars}
                            >
                                {data.tariff!.major}
                            </p>
                            <p
                                className={clsx(
                                    styles.dollars,
                                    styles['is-discount']
                                )}
                            >
                                ${data.tariff!.dollars / 2} / ${data.tariff!.dollars}
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}