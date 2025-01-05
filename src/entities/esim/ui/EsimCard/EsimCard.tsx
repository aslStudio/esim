import React from "react"
import {clsx} from "clsx"

import { ESIMItem } from "@/entities/esim/model"

import { PropsDefault } from "@/shared/lib"
import {formatDate, formatTime} from "@/shared/lib/date.ts"
import {useLanguageProvider} from "@/shared/lib/providers"

import styles from './EsimCard.module.scss'

export type EsimCardProps = PropsDefault<ESIMItem>

const EsimCardComponent: React.FC<EsimCardProps> = ({
    className,

    avatar,
    region,
    dataSize,
    days,
    isHidden,

    purchaseDate,
    iccid,
    daysLeft,
    dataLeft,
}) => {
    const { content } = useLanguageProvider()
    const cardContent = content.entities.esim.EsimCard

    return (
        <div
            className={clsx(
                className,
                styles.root,
                {
                    [styles['is-hidden']]: isHidden,
                }
            )}
        >
            <div className={styles.header}>
                <div className={styles.avatar}>
                    <img
                        src={avatar}
                        alt={'avatar'}
                    />
                </div>
                <p className={styles.title}>{region} - {dataSize} GB - {days} {cardContent.days}</p>
            </div>
            <div className={styles.cell}>
                <p>{cardContent.purchase}</p>
                <p>{formatDate(purchaseDate)}, {formatTime(purchaseDate, 'hh:mm:ss')}</p>
            </div>
            <div className={styles.cell}>
                <p>{cardContent.iccid}</p>
                <p>{iccid}</p>
            </div>
            <div className={styles.cell}>
                <p>{cardContent.daysLeft}</p>
                <p>{daysLeft}</p>
            </div>
            <div className={styles.cell}>
                <p>{cardContent.dataLeft}</p>
                <p>{dataLeft}GB</p>
            </div>
        </div>
    )
}

export const EsimCard = React.memo(EsimCardComponent)