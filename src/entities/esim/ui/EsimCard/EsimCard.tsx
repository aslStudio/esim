import React from "react"
import {clsx} from "clsx"

import { ESIMItem } from "@/entities/esim/model"

import { PropsDefault } from "@/shared/lib"
import {formatDate, formatTime} from "@/shared/lib/date.ts";

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
}) => (
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
            <p className={styles.title}>{region} - {dataSize} GB - {days} Days</p>
        </div>
        <div className={styles.cell}>
            <p>Date of purchase</p>
            <p>{formatDate(purchaseDate)}, {formatTime(purchaseDate, 'hh:mm:ss')}</p>
        </div>
        <div className={styles.cell}>
            <p>ICCID</p>
            <p>{iccid}</p>
        </div>
        <div className={styles.cell}>
            <p>Days left</p>
            <p>{daysLeft}</p>
        </div>
        <div className={styles.cell}>
            <p>Data left</p>
            <p>{dataLeft}GB</p>
        </div>
    </div>
)

export const EsimCard = React.memo(EsimCardComponent)