import {createEvent, createStore, sample} from "effector"

import {Region} from "@/entities/region/model"
import {Tariff, tariffListModel} from "@/entities/tariff/model";

import {Maybe} from "@/shared/lib"

const regionUpdated = createEvent<Region>()
const tariffUpdated = createEvent<Tariff>()

const $data = createStore<{
    region: Maybe<Region>
    tariff: Maybe<Tariff>
}>({
    region: null,
    tariff: null,
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

sample({
    source: $data,
    clock: tariffUpdated,
    fn: (data, tariff) => ({
        ...data,
        tariff,
    }),
    target: $data,
})

sample({
    clock: regionUpdated,
    fn: region => ({ region: region.id }),
    target: tariffListModel.fetchFx,
})

export const createEsimModel = {
    $data,

    regionUpdated,
    tariffUpdated,
}