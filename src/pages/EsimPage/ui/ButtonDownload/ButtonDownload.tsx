import React from "react"

import {ESIMExpand} from "@/entities/esim/model"

import {PropsDefault} from "@/shared/lib"
import {Button} from "@/shared/ui/Button";
import {Icon} from "@/shared/ui/Icon"
import {useLanguageProvider} from "@/shared/lib/providers"
import {useDownloadFile} from "@/shared/lib/hooks"

import styles from './ButtonDownload.module.scss'

export type ButtonDownloadProps = PropsDefault<{
    data: ESIMExpand
    isLoading: boolean
}>

export const ButtonDownload: React.FC<ButtonDownloadProps> = ({
    className,
    data,
    isLoading,
}) => {
    const { downloadFile } = useDownloadFile()
    const { content } = useLanguageProvider()
    const { button } = content.pages.expand

    return (
        <Button
            className={className}
            isLoading={isLoading}
            onClick={() => {
                downloadFile(data.qr)
            }}
        >
            <div className={styles.root}>
                <Icon
                    name={'download'}
                    view={'button'}
                    size={18}
                />
                <p>{button}</p>
            </div>
        </Button>
    )
}