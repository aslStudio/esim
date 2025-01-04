import React from "react"
import {clsx} from "clsx"

import { PropsDefault } from "@/shared/lib"

import { EsimCardSkeleton } from "../EsimCard"

import styles from './EsimCardList.module.scss'

export type EsimCardListSkeletonProps = PropsDefault

export const EsimCardListSkeleton: React.FC<EsimCardListSkeletonProps> = ({
    className
}) => {
    return (
        <div
            className={clsx(
                styles.root,
                className,
            )}
        >
            {Array(3).fill(1).map((_, key) => (
                <EsimCardSkeleton
                    key={key}
                />
            ))}
        </div>
    )
}