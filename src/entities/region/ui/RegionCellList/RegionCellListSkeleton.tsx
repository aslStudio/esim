import React from "react"
import {clsx} from "clsx"

import {PropsDefault} from "@/shared/lib"

import {RegionCellSkeleton} from "../RegionCell"

import styles from './RegionCellList.module.scss'

export type RegionCellListSkeletonProps = PropsDefault

export const RegionCellListSkeleton: React.FC<RegionCellListSkeletonProps> = ({
    className,
}) => (
    <div
        className={clsx(
            styles.root,
            className
        )}
    >
        {Array(3).fill(1).map((_, key) => (
            <RegionCellSkeleton
                key={key}
            />
        ))}
    </div>
)