import React from "react"

import {ESIMItem} from "@/entities/esim/model"

import {PropsDefault} from "@/shared/lib"
import {Button} from "@/shared/ui/Button";
import {Icon} from "@/shared/ui/Icon"
import {useLanguageProvider} from "@/shared/lib/providers"
import {useTelegram} from "@/shared/lib/hooks"

import styles from './ButtonDownload.module.scss'

export type ButtonDownloadProps = PropsDefault<{
    data: ESIMItem | null
    isLoading?: boolean
}>

export const ButtonDownload: React.FC<ButtonDownloadProps> = ({
    className,
    data,
    isLoading,
}) => {
    const { content } = useLanguageProvider()
    const { button } = content.pages.expand

    const { openLink } = useTelegram()

    return (
        <Button
            className={className}
            isLoading={isLoading}
            onClick={() => {
                if (data) {
                    openLink(`esim://install?activationCode=${data.activationCode}`)
                }
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