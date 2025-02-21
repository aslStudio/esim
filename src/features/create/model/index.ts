import {createEffect, createEvent, createStore, sample} from "effector"

import {availableCountriesModel, Region} from "@/entities/region/model"
import {Tariff, tariffListModel} from "@/entities/tariff/model";

import {PaymentType} from "@/shared/api/enum.ts"
import {Maybe} from "@/shared/lib"
import {createInstanceStore} from "@/shared/lib/effector"
import {CreateEsimResponse, esimApi} from "@/shared/api/esim"

const onSuccess = createInstanceStore<
    CreateEsimResponse,
    (v: CreateEsimResponse) => void
>(() => {})

const createFx = createEffect(esimApi.create)

const esimCreated = createEvent()
const regionUpdated = createEvent<Region>()
const tariffUpdated = createEvent<Tariff>()
const paymentTypeUpdated = createEvent<PaymentType>()

const $isPending = createFx.pending
const $data = createStore<{
    region: Maybe<Region>
    tariff: Maybe<Tariff>
    paymentType: PaymentType
}>({
    region: null,
    tariff: null,
    paymentType: PaymentType.STARS
})
// const $transactionData = createStore<Maybe<CreateEsimResponse>>(null)

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
    fn: region => ({ region }),
    target: [
        tariffListModel.fetchFx,
        availableCountriesModel.fetchFx,
    ],
})

sample({
    source: $data,
    clock: esimCreated,
    fn: dataToCreate,
    target: createFx,
})
sample({
    clock: createFx.doneData,
    filter: ({ error }) => !error,
    fn: ({ payload }) => payload!,
    target: [onSuccess.trigger]
})

export const createEsimModel = {
    $data,
    $isPending,

    regionUpdated,
    tariffUpdated,
    paymentTypeUpdated,
    esimCreated,

    onSuccess,
}

function dataToCreate(data: {
    region: Maybe<Region>
    tariff: Maybe<Tariff>
    paymentType: PaymentType
}) {
    return {
        package_code: data.tariff!.package_code,
    }
}