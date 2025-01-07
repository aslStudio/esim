import React from "react"
import {clsx} from "clsx"

import {PropsDefault} from "@/shared/lib"
import {useTelegram} from "@/shared/lib/hooks"

import styles from './Tabs.module.scss'

export type TabsProps = PropsDefault<{
    value: number | string
    setValue: (v: number | string) => void
    data: {
        id: number | string
        text: string
    }[]
}>

const TabsComponent: React.FC<TabsProps> = ({
    className,
    value,
    data,
    setValue,
}) => {
    const { haptic } = useTelegram()

    return (
        <div
            className={clsx(
                styles.root,
                className,
            )}
        >
            {data.map(item => (
                <button
                    key={item.id}
                    className={clsx(
                        styles.item,
                        {
                            [styles['is-active']]: value === item.id
                        }
                    )}
                    onClick={() => {
                        haptic()
                        setValue(item.id)
                    }}
                >
                    {item.text}
                </button>
            ))}
        </div>
    )
}

export const Tabs = React.memo(TabsComponent)