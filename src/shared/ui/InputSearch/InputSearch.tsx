import React, {useCallback} from "react"

import {PropsDefault} from "@/shared/lib"
import {Icon} from "@/shared/ui/Icon"

import styles from './InputSearch.module.scss'
import {clsx} from "clsx";

export type InputSearchProps = PropsDefault<{
    value: string
    placeholder: string
    setValue: (value: string) => void
    onSearch: (value: string) => void
}>

let timeout: NodeJS.Timeout

export const InputSearch: React.FC<InputSearchProps> = ({
    className,
    value,
    placeholder,
    setValue,
    onSearch
}) => {
    const onInput = useCallback((v: string) => {
        setValue(v)
        timeout = setTimeout(() => {
            onSearch(v)
            clearTimeout(timeout)
        }, 400)
    }, [setValue, onSearch])

    return (
        <div
            className={clsx(
                styles.root,
                className,
            )}
        >
            <Icon
                name={'search'}
                view={'secondary'}
                size={22}
            />
            <input
                className={styles.field}
                value={value}
                placeholder={placeholder}
                onInput={e => {
                    onInput((e.target as HTMLInputElement).value)
                }}
            />
        </div>
    )
}