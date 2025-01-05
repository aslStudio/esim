import React from "react"

import {PropsDefault} from "@/shared/lib"

import styles from './Tabs.module.scss'
import {clsx} from "clsx";

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
    return (
        <div
            className={clsx(
                styles.root,
                className,
            )}
        >
            {data.map(item => (
                <button
                    className={clsx(
                        styles.item,
                        {
                            [styles['is-active']]: value === item.id
                        }
                    )}
                    onClick={() => {
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