import React from "react"
import {clsx} from "clsx"

import {PropsDefault} from "@/shared/lib"

import styles from './ViewerCell.module.scss'
import {TextSkeleton} from "@/shared/ui/TextSkeleton";

export const ViewerCellSkeleton: React.FC<PropsDefault> = ({
    className
}) => (
    <div
        className={clsx(
            styles.root,
            className
        )}
    >
        <div
            className={clsx(
                styles.avatar,
                styles['is-skeleton']
            )}
        />
        <div className={styles.wrapper}>
            <TextSkeleton
                fontSize={16}
                lineHeight={22}
                view={'secondary'}
                widthRange={[0.5, 0.7]}
            />
            <TextSkeleton
                fontSize={16}
                lineHeight={22}
                view={'secondary'}
                widthRange={[0.5, 0.7]}
            />
        </div>
    </div>
)