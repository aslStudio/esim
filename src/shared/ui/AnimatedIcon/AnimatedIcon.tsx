import React from "react"
import Lottie from "react-lottie"

import {PropsDefault} from "@/shared/lib"
import {animations} from "@/shared/assets/animations";

export type AnimatedIconProps = PropsDefault<{
    name: keyof typeof animations.icons
    size: number
}>

export const AnimatedIcon = React.memo<AnimatedIconProps>(({
    className,
    name,
    size,
}) => (
    <div className={className}>
        <Lottie
            options={{
                loop: true,
                animationData: animations.icons[name],
            }}
            width={size}
            height={size}
        />
    </div>
))