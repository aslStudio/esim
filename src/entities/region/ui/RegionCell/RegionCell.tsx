import React from "react"
import {clsx} from "clsx"

import {Region} from "@/entities/region/model"

import {PropsDefault} from "@/shared/lib"
import {Icon} from "@/shared/ui/Icon"

import styles from './RegionCell.module.scss'

export type RegionCellProps = PropsDefault<{
    cell: Region
    isInteractive: boolean
    onClick: (v: Region) => void
}>

export const RegionCell: React.FC<RegionCellProps> = ({
    className,
    cell,
    isInteractive,
    onClick
}) => {
    return (
        <div
            className={clsx(
                styles.root,
                className,
            )}
            onClick={() => {
                if (isInteractive) {
                    onClick(cell)
                }
            }}
        >
            <div className={styles.avatar}>
                <img
                    src={cell.avatar}
                    alt={`avatar`}
                />
            </div>
            <p className={styles.name}>{cell.name}</p>
            {isInteractive && (
                <Icon
                    className={styles.icon}
                    name={'chevron_right'}
                    view={'base'}
                    size={16}
                />
            )}
        </div>
    )
}