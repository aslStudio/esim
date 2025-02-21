import React from "react"
import {clsx} from "clsx"

import {ESIMItem} from "@/entities/esim/model"

import {PropsDefault} from "@/shared/lib"
import {TransitionFade} from "@/shared/ui/TransitionFade"
import {Loader} from "@/shared/ui/Loader"

import styles from './EsimQR.module.scss'

export type EsimQRProps = PropsDefault<{
    data: ESIMItem | null
    isLoading?: boolean
}>

export const EsimQR: React.FC<EsimQRProps> = ({
    className,
    data,
    isLoading
}) => {
    return (
        <div
            className={clsx(
                styles.root,
                className,
            )}
        >
            <TransitionFade>
                {(isLoading || !data || !data.qrCode) && (
                    <Loader
                        className={styles.loader}
                        key={'Loading'}
                        size={'m'}
                        color={'brand'}
                    />
                )}
                {!isLoading && data && data.qrCode && (
                    <img
                        className={styles.qr}
                        src={data.qrCode}
                        alt={'QR Code'}
                    />
                )}
            </TransitionFade>
        </div>
    )
}