import React from "react"
import {clsx} from "clsx"

import {Tariff} from "@/entities/tariff/model"

import {Maybe, PropsDefault} from "@/shared/lib"

import { TariffCard } from '../TariffCard'

import styles from './TariffCardList.module.scss'

export type TariffCardListProps = PropsDefault<{
    value: Maybe<Tariff>
    setValue: (v: Tariff) => void
    list: Tariff[]
}>

export const TariffCardList: React.FC<TariffCardListProps> = ({
    className,
    value,
    setValue,
    list,
}) => {
    return (
        <div
            className={clsx(
                styles.root,
                className,
            )}
        >
            {list.map(item => (
                <TariffCard
                    key={item.id}
                    tariff={item}
                    isSelect={item.id === value?.id}
                    onClick={() => {
                        setValue(item)
                    }}
                />
            ))}
        </div>
    )
}