import React from "react"
import {clsx} from "clsx"

import {PropsDefault} from "@/shared/lib"

import styles from './EsimCard.module.scss'
import {TextSkeleton} from "@/shared/ui/TextSkeleton";

export const EsimCardSkeleton: React.FC<PropsDefault> = ({
    className
}) => (
    <div
        className={clsx(
            className,
            styles.root
        )}
    >
        <div className={styles.header}>
            <div
                className={clsx(
                    styles.avatar,
                    styles['is-skeleton']
                )}
            />
            <TextSkeleton
                className={styles.title}
                fontSize={20}
                lineHeight={22}
                view={'secondary'}
                widthRange={[0.5, 0.7]}
            />
        </div>
        <div className={styles.cell}>
            <TextSkeleton
                fontSize={16}
                lineHeight={30}
                view={'secondary'}
                widthRange={[0.5, 0.7]}
            />
            <TextSkeleton
                fontSize={16}
                lineHeight={30}
                view={'secondary'}
                widthRange={[0.5, 0.7]}
            />
        </div>
        <div className={styles.cell}>
            <TextSkeleton
                fontSize={16}
                lineHeight={30}
                view={'secondary'}
                widthRange={[0.5, 0.7]}
            />
            <TextSkeleton
                fontSize={16}
                lineHeight={30}
                view={'secondary'}
                widthRange={[0.5, 0.7]}
            />
        </div>
        <div className={styles.cell}>
            <TextSkeleton
                fontSize={16}
                lineHeight={30}
                view={'secondary'}
                widthRange={[0.5, 0.7]}
            />
            <TextSkeleton
                fontSize={16}
                lineHeight={30}
                view={'secondary'}
                widthRange={[0.5, 0.7]}
            />
        </div>
        <div className={styles.cell}>
            <TextSkeleton
                fontSize={16}
                lineHeight={30}
                view={'secondary'}
                widthRange={[0.5, 0.7]}
            />
            <TextSkeleton
                fontSize={16}
                lineHeight={30}
                view={'secondary'}
                widthRange={[0.5, 0.7]}
            />
        </div>
    </div>
)