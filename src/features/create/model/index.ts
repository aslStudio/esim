import {createEvent, createStore, sample} from "effector"

import {Region} from "@/entities/region/model"

import {Maybe} from "@/shared/lib"

const regionUpdated = createEvent<Region>()

const $data = createStore<{
    region: Maybe<Region>
}>({
    region: null
})

sample({
    source: $data,
    clock: regionUpdated,
    fn: (data, region) => ({
        ...data,
        region,
    }),
    target: $data,
})

export const createEsimModel = {
    $data,

    regionUpdated,
}