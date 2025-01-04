import React, {useState} from "react"
import {clsx} from "clsx"

import { PropsDefaultWithChildren } from "@/shared/lib"
import {Icon, IconProps} from "@/shared/ui/Icon"
import {TransitionExpand} from "@/shared/ui/TransitionExpand"

import styles from './CardCollapse.module.scss'
import {TransitionFade} from "@/shared/ui/TransitionFade";
import {Loader} from "@/shared/ui/Loader";

export type CardCollapseProps = PropsDefaultWithChildren<{
    title: string
    icon?: IconProps['name']
    isLoading?: boolean
    size: 's' | 'm'
}>

const CardCollapseComponent: React.FC<CardCollapseProps> = ({
    className,
    title,
    icon,
    size,
    isLoading,
    children
}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div
            className={clsx(
                styles.root,
                styles[`size_${size}`],
                className,
            )}
        >
            <div
                className={styles.header}
                onClick={() => {
                    setIsOpen(!isOpen)
                }}
            >
                <div className={styles.title}>
                    {icon && (
                        <Icon
                            name={icon}
                            size={22}
                        />
                    )}
                    <p>{title}</p>
                </div>
                <TransitionFade>
                    {isLoading && (
                        <Loader
                            color={'brand'}
                            size={'xs'}
                        />
                    )}
                    {!isLoading && (
                        <Icon
                            className={clsx(
                                styles.icon,
                                {
                                    [styles['is-active']]: isOpen,
                                }
                            )}
                            name={'chevron_right'}
                            view={'base'}
                            size={16}
                        />
                    )}
                </TransitionFade>
            </div>
            <TransitionExpand isShow={isOpen && !isLoading}>
                <div className={styles[`content_${size}`]}>
                    {children}
                </div>
            </TransitionExpand>
        </div>
    )
}

export const CardCollapse = React.memo(CardCollapseComponent)