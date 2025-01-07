import React from "react"
import {clsx} from "clsx"

import {Tariff} from "@/entities/tariff/model"

import {PropsDefault} from "@/shared/lib"
import {Radio} from "@/shared/ui/Radio"
import {AnimatedIcon} from "@/shared/ui/AnimatedIcon"

import styles from './TariffCard.module.scss'
import {toFormattedNumber} from "@/shared/lib/number.ts";

export type TariffCardProps = PropsDefault<{
    tariff: Tariff
    isSelect: boolean
    onClick: (value: Tariff) => void
}>

export const TariffCard: React.FC<TariffCardProps> = ({
    className,
    tariff,
    isSelect,
    onClick
}) => {
    return (
        <Radio
            className={clsx(
                className,
                styles.root
            )}
            value={isSelect}
            setValue={v => {
                if (v) {
                    onClick(tariff)
                }
            }}
        >
            <div className={styles.wrapper}>
                <div className={styles.info}>
                    <p className={styles.title}>{tariff.size} GB</p>
                    <p className={styles.description}>{tariff.days} Days</p>
                </div>
                <div className={styles.price}>
                    <AnimatedIcon
                        name={'star'}
                        size={24}
                    />
                    <p className={styles.title}>{toFormattedNumber(tariff.stars)}</p>
                    <p className={styles.description}>${toFormattedNumber(tariff.dollars)}</p>
                </div>
            </div>
        </Radio>
    )
}