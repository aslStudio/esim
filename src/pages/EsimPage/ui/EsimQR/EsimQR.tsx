import React from "react"
import {clsx} from "clsx"

import {ESIMExpand} from "@/entities/esim/model"

import {PropsDefault} from "@/shared/lib"
import {TransitionFade} from "@/shared/ui/TransitionFade"
import {Loader} from "@/shared/ui/Loader"

import styles from './EsimQR.module.scss'

export type EsimQRProps = PropsDefault<{
    data: ESIMExpand
    isLoading: boolean
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
                {(isLoading || !data.qr) && (
                    <Loader
                        className={styles.loader}
                        key={'Loading'}
                        size={'m'}
                        color={'brand'}
                    />
                )}
                {!isLoading && data.qr && (
                    <img
                        className={styles.qr}
                        src={data.qr}
                        alt={'QR Code'}
                    />
                )}
            </TransitionFade>
        </div>
    )
}