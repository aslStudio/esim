import React from "react"

import {ESIMItem} from "@/entities/esim/model"

import {PropsDefault} from "@/shared/lib"
import {useLanguageProvider} from "@/shared/lib/providers";

import styles from './ManualInstallation.module.scss'
import {CopyCell} from "@/shared/ui/CopyCell";
import {clsx} from "clsx";

export type ManualInstallationProps = PropsDefault<{
    data: ESIMItem | null
    isLoading?: boolean
}>

export const ManualInstallation: React.FC<ManualInstallationProps> = ({
    className,
    data,
}) => {
    const { content } = useLanguageProvider()
    const {
        title,
        smdp,
        code
    } = content.pages.expand.manual

    return (
        <div
            className={clsx(
                styles.root,
                className,
            )}
        >
            <p className={styles.title}>{title}</p>
            <CopyCell
                className={styles.cell}
                label={smdp}
                value={data?.smdp ?? ''}
                isLoading={!data || !data.smdp}
            />
            <CopyCell
                className={styles.cell}
                label={code}
                value={data?.activationCode ?? ''}
                isLoading={!data || !data.smdp}
            />
        </div>
    )
}