import React from "react"
import {clsx} from "clsx"

import {PropsDefault} from "@/shared/lib"

import { TariffCardSkeleton } from '../TariffCard'

import styles from './TariffCardList.module.scss'

export type TariffCardListSkeletonProps = PropsDefault

export const TariffCardListSkeleton: React.FC<TariffCardListSkeletonProps> = ({
    className,
}) => {
    return (
        <div
            className={clsx(
                styles.root,
                className,
            )}
        >
            {Array(3).fill(1).map((_,key) => (
                <TariffCardSkeleton
                    key={key}
                />
            ))}
        </div>
    )
}