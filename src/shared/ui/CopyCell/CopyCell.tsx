import React from "react"
import {clsx} from "clsx"

import {PropsDefault} from "@/shared/lib"
import {TransitionFade} from "@/shared/ui/TransitionFade"
import {Loader} from "@/shared/ui/Loader"
import {Icon} from "@/shared/ui/Icon"
import {TextSkeleton} from "@/shared/ui/TextSkeleton";

import styles from './CopyCell.module.scss'
import {useCopyToClipboard} from "@/shared/lib/hooks";

export type CopyCellProps = PropsDefault<{
    label: string
    value: string
    isLoading: boolean
}>

export const CopyCell: React.FC<CopyCellProps> = ({
    className,
    label,
    value,
    isLoading,
}) => {
    const { copy } = useCopyToClipboard()

    return (
        <div
            className={clsx(
                styles.root,
                className,
            )}
            onClick={() => {
                if (!isLoading) {
                    copy(value)
                }
            }}
        >
            <p className={styles.label}>{label}</p>
            <div className={styles.field}>
                <TransitionFade className={styles.value}>
                    {!isLoading && (
                        <p>{value}</p>
                    )}
                    {isLoading && (
                        <TextSkeleton
                            fontSize={16}
                            lineHeight={22}
                            view={'secondary'}
                            widthRange={[0.4, 0.7]}
                        />
                    )}
                </TransitionFade>
                <TransitionFade className={styles.right}>
                    {isLoading && (
                        <Loader
                            size={'xs'}
                            color={'brand'}
                        />
                    )}
                    {!isLoading && (
                        <Icon
                            name={'copy'}
                            view={'base'}
                            size={24}
                        />
                    )}
                </TransitionFade>
            </div>
        </div>
    )
}