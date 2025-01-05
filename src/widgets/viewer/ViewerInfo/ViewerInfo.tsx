import React from "react"
import {reflect} from "@effector/reflect"

import {viewerModel} from "@/entities/viewer/model"

import {TransitionFade} from "@/shared/ui/TransitionFade"
import {ViewerCell, ViewerCellSkeleton} from "@/entities/viewer/ui/ViewerCell"
import {SkeletonWrapper} from "@/shared/ui/SkeletonWrapper"

export const ViewerInfo: React.FC<{
    isInteractive: boolean;
}> = ({
    isInteractive
}) => {
    const { isLoading } = viewerModel.useFetchGate()

    return (
        <TransitionFade>
            {isLoading && (
                <SkeletonWrapper>
                    <ViewerCellSkeleton />
                </SkeletonWrapper>
            )}
            {!isLoading && (
                <ViewerCellReflect
                    isInterActive={isInteractive}
                />
            )}
        </TransitionFade>
    )
}

const ViewerCellReflect = reflect({
    view: ViewerCell,
    bind: {
        viewer: viewerModel.$data,
    }
})