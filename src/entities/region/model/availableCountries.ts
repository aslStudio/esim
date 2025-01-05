import {createEffect, createStore, sample} from "effector"

import {GetAvailableCountriesResponse, regionApi} from "@/shared/api/region"
import {ResponseDefault} from "@/shared/lib/api/createRequest.ts";

const fetchFx = createEffect(regionApi.getAvailableCountries)

const $isPending = fetchFx.pending
const $countriesString = createStore<string>('')
const $count = createStore<number>(0)

sample({
    clock: fetchFx.doneData,
    fn: toDomain,
    target: $countriesString,
})

sample({
    clock: fetchFx.doneData,
    fn: toCount,
    target: $count,
})

export const availableCountriesModel = {
    fetchFx,

    $countriesString,
    $count,
    $isPending
}

function toDomain(response: ResponseDefault<GetAvailableCountriesResponse>) {
    return response.payload?.join(', ') ?? ''
}

function toCount(response: ResponseDefault<GetAvailableCountriesResponse>) {
    return response.payload?.length ?? 0
}