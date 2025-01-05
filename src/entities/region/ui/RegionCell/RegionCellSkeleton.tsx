import React from "react"
import {clsx} from "clsx"

import { PropsDefault } from "@/shared/lib"
import {TextSkeleton} from "@/shared/ui/TextSkeleton"

import styles from './RegionCell.module.scss'

export const RegionCellSkeleton: React.FC<PropsDefault> = ({
    className,
}) => {
    return (
        <div
            className={clsx(
                styles.root,
                className,
            )}
        >
            <div
                className={clsx(
                    styles.avatar,
                    styles['is-skeleton']
                )}
            />
            <TextSkeleton
                fontSize={16}
                lineHeight={22}
                view={'secondary'}
                widthRange={[0.6, 0.8]}
            />
        </div>
    )
}