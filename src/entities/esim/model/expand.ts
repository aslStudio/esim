import {createEffect, createEvent, createStore, sample} from "effector"

import {esimApi} from "@/shared/api/esim"

import { ESIMExpand } from './types.ts'

const fetchFx = createEffect(esimApi.getEsimExpand)

const esimRequested = createEvent<number | string>()

const $isPending = fetchFx.pending
const $data = createStore<ESIMExpand>({
    id: 0,
    qr: '',
    smdp: '',
    code: '',
})

sample({
    clock: esimRequested,
    fn: id => ({ id }),
    target: fetchFx,
})
sample({
    clock: fetchFx.doneData,
    filter: ({ error }) => !error,
    fn: ({ payload }) => payload!,
    target: $data,
})

export const esimExpandModel = {
    $isPending,
    $data,

    esimRequested,
}