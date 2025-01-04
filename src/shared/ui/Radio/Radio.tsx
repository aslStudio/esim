import React from "react"

import {PropsDefaultWithChildren} from "@/shared/lib"
import {Icon} from "@/shared/ui/Icon"
import {TransitionFade} from "@/shared/ui/TransitionFade"

import styles from './Radio.module.scss'
import {clsx} from "clsx";

export type RadioProps = PropsDefaultWithChildren<{
    value: boolean
    setValue: (value: boolean) => void
}>

const RadioComponent: React.FC<RadioProps> = ({
    className,
    value,
    setValue,
    children
}) => {
    return (
        <div
            className={clsx(
                styles.root,
                className,
            )}
            onClick={() => {
                setValue(!value)
            }}
        >
            <div className={styles.content}>{children}</div>
            <div
                className={clsx(
                    styles.radio,
                    {
                        [styles['is-active']]: value,
                    }
                )}
            >
                <TransitionFade>
                    {value && (
                        <Icon
                            name={'check'}
                            view={'section'}
                            size={11}
                        />
                    )}
                </TransitionFade>
            </div>
        </div>
    )
}

export const Radio = React.memo(RadioComponent)