import {viewerModel} from "@/entities/viewer/model";
import {TransitionFade} from "@/shared/ui/TransitionFade";
import {ViewerCell, ViewerCellSkeleton} from "@/entities/viewer/ui/ViewerCell";
import {reflect} from "@effector/reflect";

export const ViewerInfo = () => {
    const { isLoading } = viewerModel.useFetchGate()

    return (
        <TransitionFade>
            {isLoading && (
                <ViewerCellSkeleton />
            )}
            {!isLoading && (
                <ViewerCellReflect />
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