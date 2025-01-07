import React from "react"
import {clsx} from "clsx"

import {Viewer} from "@/entities/viewer/model/types.ts"

import {PropsDefault, RootPaths} from "@/shared/lib"
import {Icon} from "@/shared/ui/Icon"
import {useProjectNavigate, useTelegram} from "@/shared/lib/hooks"

import styles from './ViewerCell.module.scss'

export type ViewerCellProps = PropsDefault<{
    viewer: Viewer
    isInterActive: boolean
}>

export const ViewerCell: React.FC<ViewerCellProps> = ({
    className,
    viewer,
    isInterActive
}) => {
    const { navigate } = useProjectNavigate()
    const { haptic } = useTelegram()

    return (
        <div
            className={clsx(
                styles.root,
                className,
            )}
            onClick={() => {
                if (isInterActive) {
                    haptic()
                    navigate(RootPaths.PROFILE)
                }
            }}
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
            {isInterActive && (
                <Icon
                    name={'chevron_right'}
                    size={24}
                    view={'secondary'}
                />
            )}
        </div>
    )
}