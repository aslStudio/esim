import React from "react"

import {PropsDefault} from "@/shared/lib"
import {AnimatedIcon} from "@/shared/ui/AnimatedIcon"

import styles from './MajorIcon.module.scss'
import {clsx} from "clsx";

export const MajorIcon: React.FC<PropsDefault> = ({
    className
}) => (
    <div
        className={clsx(
            styles.major,
            className,
        )}
    >
        <AnimatedIcon
            className={styles['major-icon']}
            name={'star'}
            size={16}
        />
    </div>
)