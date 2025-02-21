import React, {useMemo} from "react"
import {clsx} from "clsx"

import { ESIMItem } from "@/entities/esim/model"

import { PropsDefault } from "@/shared/lib"
import {formatDate, formatTime} from "@/shared/lib/date.ts"
import {useLanguageProvider} from "@/shared/lib/providers"
import {publicPaths} from "@/shared/assets/public.ts"

import styles from './EsimCard.module.scss'

export type EsimCardProps = PropsDefault<ESIMItem & {
    onClick?: () => void
}>

const EsimCardComponent: React.FC<EsimCardProps> = ({
    className,

    name,
    avatar,
    isHidden,

    purchaseDate,
    iccid,
    daysLeft,
    dataLeft,

    onClick
}) => {
    const { content } = useLanguageProvider()
    const cardContent = content.entities.esim.EsimCard

    const imgPath = useMemo(() => {
        if (avatar.includes('/')) {
            return `https://p.qrsim.net${avatar}`
        }

        const name = avatar.toLowerCase().split(' ').join('_')

        return publicPaths.regions[name as keyof typeof publicPaths.regions] ?? ''
    }, [avatar])

    return (
        <div
            className={clsx(
                className,
                styles.root,
                {
                    [styles['is-hidden']]: isHidden,
                }
            )}
            onClick={onClick}
        >
            <div className={styles.header}>
                <div className={styles.avatar}>
                    <img
                        src={imgPath}
                        alt={'avatar'}
                    />
                </div>
                {/*<p className={styles.title}>{region} - {dataSize} GB - {days} {cardContent.days}</p>*/}
                <p className={styles.title}>{name}</p>
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