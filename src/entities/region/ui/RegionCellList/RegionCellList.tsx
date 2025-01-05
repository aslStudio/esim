import React from "react"
import {clsx} from "clsx"

import {Region} from "@/entities/region/model"

import {PropsDefault} from "@/shared/lib"

import {RegionCell} from "../RegionCell"

import styles from './RegionCellList.module.scss'

export type RegionCellListProps = PropsDefault<{
    list: Region[]
    onSelect: (region: Region) => void
}>

export const RegionCellList: React.FC<RegionCellListProps> = ({
    className,
    list,
    onSelect
}) => {
    return (
        <div
            className={clsx(
                styles.root,
                className,
            )}
        >
            {list.map(item => (
                <RegionCell
                    key={item.id}
                    cell={item}
                    isInteractive={true}
                    onClick={onSelect}
                />
            ))}
        </div>
    )
}