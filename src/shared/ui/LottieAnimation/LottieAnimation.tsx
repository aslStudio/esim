import React from "react"
import Lottie from "react-lottie"

import {PropsDefault} from "@/shared/lib"
import {animations} from "@/shared/assets/animations";

export type LottieAnimationProps = PropsDefault<{
    name: keyof typeof animations.stikers
    width: number
    height: number
}>

export const LottieAnimation = React.memo<LottieAnimationProps>(({
    className,
    name,
    width,
    height,
}) => (
    <div className={className}>
        <Lottie
            options={{
                loop: true,
                animationData: animations.stikers[name],
            }}
            width={width}
            height={height}
        />
    </div>
))