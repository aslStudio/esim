import {createEvent, createStore, sample} from "effector"

import {availableCountriesModel, Region} from "@/entities/region/model"
import {Tariff, tariffListModel} from "@/entities/tariff/model";

import {PaymentType} from "@/shared/api/enum.ts"
import {Maybe} from "@/shared/lib"

const regionUpdated = createEvent<Region>()
const tariffUpdated = createEvent<Tariff>()
const paymentTypeUpdated = createEvent<PaymentType>()

const $data = createStore<{
    region: Maybe<Region>
    tariff: Maybe<Tariff>
    paymentType: PaymentType
}>({
    region: null,
    tariff: null,
    paymentType: PaymentType.STARS
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
    source: $data,
    clock: paymentTypeUpdated,
    fn: (data, paymentType) => ({
        ...data,
        paymentType,
    }),
    target: $data,
})

sample({
    clock: regionUpdated,
    fn: region => ({ region: region.id }),
    target: [
        tariffListModel.fetchFx,
        availableCountriesModel.fetchFx,
    ],
})

export const createEsimModel = {
    $data,

    regionUpdated,
    tariffUpdated,
    paymentTypeUpdated,
}