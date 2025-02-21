import React, {useMemo} from "react"
import {clsx} from "clsx"

import {Region} from "@/entities/region/model"

import {PropsDefault} from "@/shared/lib"
import {Icon} from "@/shared/ui/Icon"
import {useTelegram} from "@/shared/lib/hooks"

import styles from './RegionCell.module.scss'
import {RegionType} from "@/shared/api/enum.ts";
import {publicPaths} from "@/shared/assets/public.ts";

export type RegionCellProps = PropsDefault<{
    cell: Region
    isInteractive: boolean
    onClick?: (v: Region) => void
}>

export const RegionCell: React.FC<RegionCellProps> = ({
    className,
    cell,
    isInteractive,
    onClick
}) => {
    const { haptic } = useTelegram()

    const imgPath = useMemo(() => {
        if (cell.type === RegionType.COUNTRY) {
            return `https://p.qrsim.net${cell.avatar}`
        }

        const name = cell.name.toLowerCase().split(' ').join('_')

        return publicPaths.regions[name as keyof typeof publicPaths.regions]
    }, [cell])

    return (
        <div
            className={clsx(
                styles.root,
                className,
            )}
            onClick={() => {
                if (isInteractive) {
                    haptic()
                    onClick?.(cell)
                }
            }}
        >
            <div className={styles.avatar}>
                <img
                    src={imgPath}
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