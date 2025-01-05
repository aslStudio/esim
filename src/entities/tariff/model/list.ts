import {createEffect, createStore, sample} from "effector"

import {tariffApi} from "@/shared/api/tariff"

import { Tariff } from './types.ts'

const fetchFx = createEffect(tariffApi.getList)

const $isPending = fetchFx.pending
const $list = createStore<Tariff[]>([])

sample({
    clock: fetchFx.doneData,
    fn: ({ payload }) => payload ?? [],
    target: $list,
})

export const tariffListModel = {
    $list,
    $isPending,
    fetchFx,
}