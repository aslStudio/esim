import {useEffect} from "react"
import {createEffect, createEvent, createStore, sample} from "effector"
import {createGate, useUnit} from "effector-react"

import {regionApi} from "@/shared/api/region"
import {RegionType} from "@/shared/api/enum.ts";

import { Region } from './types.ts'

const RegionGate = createGate()

const fetchFx = createEffect(regionApi.getList)

const searchRequested = createEvent<string>()
const searchUpdated = createEvent<string>()
const typeUpdated = createEvent<RegionType>()

const $isPending = createStore(true)
const $searchValue = createStore('')
const $type = createStore<RegionType>(RegionType.COUNTRY)
const $list = createStore<Region[]>([])

sample({
    source: {
        search: $searchValue,
        type: $type,
    },
    clock: RegionGate.open,
    target: fetchFx,
})
sample({
    clock: fetchFx,
    fn: () => true,
    target: $isPending,
})
sample({
    clock: fetchFx.doneData,
    fn: () => false,
    target: $isPending,
})
sample({
    clock: fetchFx.doneData,
    fn: ({ payload }) => payload ?? [],
    target: $list,
})

sample({
    clock: searchUpdated,
    target: $searchValue,
})

sample({
    clock: typeUpdated,
    target: $type,
})
sample({
    clock: typeUpdated,
    fn: () => '',
    target: $searchValue,
})

sample({
    source: {
        search: $searchValue,
        type: $type,
    },
    clock: $type,
    target: fetchFx,
})
sample({
    source: $type,
    clock: searchRequested,
    fn: (type, search) => ({
        type,
        search,
    }),
    target: fetchFx,
})

const useFetchRegion = () => {
    useEffect(() => {
        RegionGate.open()
    }, []);

    return {
        isPending: useUnit($isPending),
    }
}

export const regionListModel = {
    useFetchRegion,

    $list,
    $type,
    $searchValue,

    typeUpdated,
    searchUpdated,
    searchRequested,
}