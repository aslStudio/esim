import {viewerModel} from "@/entities/viewer/model";
import {TransitionFade} from "@/shared/ui/TransitionFade";
import {ViewerCell, ViewerCellSkeleton} from "@/entities/viewer/ui/ViewerCell";
import {reflect} from "@effector/reflect";
import React from "react";

export const ViewerInfo: React.FC<{
    isInteractive: boolean;
}> = ({
    isInteractive
}) => {
    const { isLoading } = viewerModel.useFetchGate()

    return (
        <TransitionFade>
            {isLoading && (
                <ViewerCellSkeleton />
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