import React from "react"
import {clsx} from "clsx"

import {PropsDefault} from "@/shared/lib"

import styles from './TariffCard.module.scss'
import {TextSkeleton} from "@/shared/ui/TextSkeleton";
import {AnimatedIcon} from "@/shared/ui/AnimatedIcon";

export const TariffCardSkeleton: React.FC<PropsDefault> = ({
    className,
}) => {
    return (
        <div
            className={clsx(
                className,
                styles.root
            )}
        >
            <div className={styles.wrapper}>
                <div className={styles.info}>
                    <TextSkeleton
                        fontSize={20}
                        lineHeight={22}
                        view={'secondary'}
                        widthRange={[0.4, 0.9]}
                    />
                    <TextSkeleton
                        fontSize={16}
                        lineHeight={22}
                        view={'secondary'}
                        widthRange={[0.4, 0.9]}
                    />
                </div>
                <div className={styles.price}>
                    <AnimatedIcon
                        name={'star'}
                        size={24}
                    />
                    <TextSkeleton
                        fontSize={20}
                        lineHeight={22}
                        view={'secondary'}
                        widthRange={[0.2, 0.4]}
                    />
                    <TextSkeleton
                        fontSize={16}
                        lineHeight={22}
                        view={'secondary'}
                        widthRange={[0.2, 0.4]}
                    />
                </div>
            </div>
        </div>
    )
}