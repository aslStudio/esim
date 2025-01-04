import React from "react"
import {clsx} from "clsx"

import { PropsDefault } from "@/shared/lib"

import { ESIMItem } from "../../model"

import { EsimCard } from "../EsimCard"

import styles from './EsimCardList.module.scss'

export type EsimCardListProps = PropsDefault<{
    list: ESIMItem[]
}>

export const EsimCardList: React.FC<EsimCardListProps> = ({
    className,
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
                <EsimCard
                    key={item.id}
                    {...item}
                />
            ))}
        </div>
    )
}