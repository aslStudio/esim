import React from "react"
import {clsx} from "clsx"

import {Viewer} from "@/entities/viewer/model/types.ts"

import {PropsDefault} from "@/shared/lib"

import styles from './ViewerCell.module.scss'
import {Icon} from "@/shared/ui/Icon";

export type ViewerCellProps = PropsDefault<{
    viewer: Viewer
}>

export const ViewerCell: React.FC<ViewerCellProps> = ({
    className,
    viewer
}) => (
    <div
        className={clsx(
            styles.root,
            className,
        )}
    >
        <div className={styles.wrapper}>
            <div className={styles.avatar}>
                <p>{viewer.name[0].toUpperCase()}</p>
                {viewer.avatar && (
                    <img
                        src={viewer.avatar}
                        alt={'avatar'}
                    />
                )}
            </div>
            <div className={styles.inner}>
                <p className={styles.name}>{viewer.name}</p>
                <p className={styles.username}>{viewer.username}</p>
            </div>
        </div>
        <Icon
            name={'chevron_right'}
            size={24}
            view={'secondary'}
        />
    </div>
)