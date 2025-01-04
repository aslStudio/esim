import {createStore, sample} from "effector"

import {viewerApi} from "@/shared/api/viewer"

import { Viewer } from './types.ts'
import {createFetch} from "@/shared/lib/effector";

const [fetchFx, useFetchGate, Gate] = createFetch(viewerApi.getViewer)

const $data = createStore<Viewer>({
    avatar: '',
    name: '',
    username: '',
})

sample({
    clock: Gate.open,
    target: fetchFx,
})

sample({
    clock: fetchFx.doneData,
    filter: ({ error }) => !error,
    fn: ({ payload }) => payload!,
    target: $data,
})

export const viewerModel = {
    $data,
    useFetchGate,
}

