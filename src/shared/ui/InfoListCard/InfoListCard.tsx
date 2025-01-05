import React from "react"
import {clsx} from "clsx"

import {PropsDefault} from "@/shared/lib"

import styles from './InfoListCard.module.scss'

export type InfoListCardProps = PropsDefault<{
    title: string
    list: string[]
}>

export const InfoListCard: React.FC<InfoListCardProps> = ({
    className,
    title,
    list,
}) => {
    return (
        <div
            className={clsx(
                styles.root,
                className,
            )}
        >
            <p className={styles.title}>{title}</p>
            <div>
                {list.map(item => (
                    <p className={styles.item}>{item}</p>
                ))}
            </div>
        </div>
    )
}