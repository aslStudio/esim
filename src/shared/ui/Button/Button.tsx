import React from "react"
import {clsx} from "clsx"

import { PropsDefaultWithChildren } from "@/shared/lib"
import {TransitionFade} from "@/shared/ui/TransitionFade";
import {Loader} from "@/shared/ui/Loader";

import styles from './Button.module.scss'

export type ButtonProps = PropsDefaultWithChildren<{
    isDisabled?: boolean
    isLoading?: boolean
    onClick: () => void
}>

const ButtonComponent: React.FC<ButtonProps> = ({
    className,
    isLoading,
    isDisabled,
    onClick,
    children
}) => {
    return (
        <button
            className={clsx(
                className,
                styles.root,
                {
                    [styles['is-loading']]: isLoading,
                    [styles['is-disabled']]: isDisabled,
                }
            )}
            disabled={isDisabled || isLoading}
            onClick={onClick}
        >
            <div className={styles.content}>
                {children}
            </div>
            <TransitionFade
                className={styles.loader}
            >
                {isLoading && (
                    <Loader
                        size={'xs'}
                        color={'white'}
                    />
                )}
            </TransitionFade>
        </button>
    )
}

export const Button = React.memo(ButtonComponent)