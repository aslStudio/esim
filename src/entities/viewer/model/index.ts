import {createStore, sample} from "effector"

import {viewerApi} from "@/shared/api/viewer"
import {createFetch} from "@/shared/lib/effector"

import { Viewer } from './types.ts'

const [fetchFx, useFetchGate, Gate, $isPending] = createFetch(viewerApi.getViewer)

const $data = createStore<Viewer>({
    avatar: '',
    name: '',
    username: '',
    orders: [],
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
    $isPending,
    useFetchGate,
}

