import {combine, createStore, sample} from "effector"

import {createFetch} from "@/shared/lib/effector"
import {esimApi} from "@/shared/api/esim"

import { ESIMItem } from './types.ts'

const [fetchFx, useFetchGate, Gate, $isPending] = createFetch(esimApi.getList)

const $data = createStore<ESIMItem[]>([])

const $showedList = combine($data, getShowedList)
const $hiddenList = combine($data, getHiddenList)

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

export const esimListModel = {
    $showedList,
    $hiddenList,
    $isPending,

    useFetchGate,
}

function getShowedList(data: ESIMItem[]): ESIMItem[] {
    return data.filter(item => !item.isHidden)
}

function getHiddenList(data: ESIMItem[]): ESIMItem[] {
    return data.filter(item => item.isHidden)
}