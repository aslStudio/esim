import {useEffect} from "react"
import {createEffect, createEvent, createStore, sample} from "effector"
import {useUnit} from "effector-react"

import {GetRegionResponse, regionApi} from "@/shared/api/region"
import {RegionType} from "@/shared/api/enum.ts";

import { Region } from './types.ts'
import {ResponseDefault} from "@/shared/lib/api/createRequest.ts";

const fetchFx = createEffect(regionApi.getList)

const gateOpened = createEvent()
const searchRequested = createEvent<string>()
const searchUpdated = createEvent<string>()
const typeUpdated = createEvent<RegionType>()

const $isPending = createStore(true)
const $searchValue = createStore('')
const $type = createStore<RegionType>(RegionType.COUNTRY)
const $list = createStore<Region[]>([])
const $viewList = createStore<Region[]>([])

sample({
    source: {
        search: $searchValue,
        type: $type,
    },
    clock: gateOpened,
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
    fn: toDomain,
    target: [$list, $viewList],
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
    source: $list,
    clock: searchRequested,
    fn: (list, searchValue) => list.filter(item => item.name.includes(searchValue)),
    target: $viewList,
})

const useFetchRegion = () => {
    useEffect(() => {
        gateOpened()
    }, []);

    return {
        isPending: useUnit($isPending),
    }
}

export const regionListModel = {
    useFetchRegion,

    $list,
    $viewList,
    $type,
    $searchValue,

    typeUpdated,
    searchUpdated,
    searchRequested,
}

function toDomain(data: ResponseDefault<GetRegionResponse>): Region[] {
    if (data.payload) {
        return data.payload.result.locations.map((item, key) => ({
            id: key,
            avatar: item.image,
            name: item.name,
            codes: item.codes,
            type: item.type
        }))
    }

    return []
}