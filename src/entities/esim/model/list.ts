import {attach, combine, createEffect, createEvent, createStore, sample} from "effector"

import {createFetch} from "@/shared/lib/effector"
import {esimApi, GetEsimListResponse, GetNotPayedEsimResponse} from "@/shared/api/esim"

import {ESIMItem, NotPayedESIM} from './types.ts'
import {ResponseDefault} from "@/shared/lib/api/createRequest.ts";

const [fetchFx, useFetchGate, Gate, $isPending] = createFetch(esimApi.getList)
const fetchNotPayedFx = createEffect(esimApi.getNotPayedEsim)
const refetchNotPayedFx = attach({
    effect: fetchNotPayedFx,
})

const notPayedExipered = createEvent()

const $notPayed = createStore<NotPayedESIM | null>(null)
const $data = createStore<ESIMItem[]>([])

const $showedList = combine($data, getShowedList)
const $hiddenList = combine($data, getHiddenList)

const $isLoading = combine($isPending, fetchNotPayedFx.pending, (v1, v2) => v1 || v2)

sample({
    clock: Gate.open,
    target: fetchFx,
})

sample({
    clock: fetchFx.doneData,
    filter: ({ error }) => !error,
    fn: toDomain,
    target: $data,
})

sample({
    clock: fetchFx.doneData,
    target: fetchNotPayedFx,
})

sample({
    clock: [fetchNotPayedFx.doneData, refetchNotPayedFx.doneData],
    fn: notPayedToDomain,
    target: $notPayed,
})

sample({
    clock: notPayedExipered,
    fn: () => null,
    target: $notPayed,
})

export const esimListModel = {
    $showedList,
    $hiddenList,
    $notPayed,
    $isPending: $isLoading,

    notPayedExipered,

    fetchFx,
    refetchNotPayedFx,
    useFetchGate,
}

function getShowedList(data: ESIMItem[]): ESIMItem[] {
    return data.filter(item => !item.isHidden)
}

function getHiddenList(data: ESIMItem[]): ESIMItem[] {
    return data.filter(item => item.isHidden)
}

function toDomain(data: ResponseDefault<GetEsimListResponse>): ESIMItem[] {
    if (!data.payload) {
        return []
    }

    function toTimestamp(isoString: string): number {
        const date = new Date(isoString);
        if (isNaN(date.getTime())) {
            return 0
        }
        return date.getTime()
    }

    return data.payload.result.profiles.map(item => ({
        id: item.iccid,
        name: item.name,
        avatar: item.image,
        region: 'region',
        dataSize: 0,
        days: 0,
        isHidden: item.is_archived,
        purchaseDate: toTimestamp(item.expiring_at),
        iccid: item.iccid,
        dataLeft: item.data_left,
        daysLeft: item.days_left,

        qrCode: item.qr_code_url,
        smdp: item.smdp,
        activationCode: item.activation_code
    }))
}

function notPayedToDomain(data: ResponseDefault<GetNotPayedEsimResponse>): NotPayedESIM | null {
    if (data.error || !data.payload || !data.payload.result) {
        return null
    }

    function toTimestamp(isoString: string): number {
        const date = new Date(isoString);
        if (isNaN(date.getTime())) {
            return 0
        }
        return date.getTime()
    }

    return {
        name: data.payload.result.package_info.name,
        avatar: data.payload.result.package_info.image,
        validUntil: toTimestamp(data.payload.result.valid_until),
        isPayed: data.payload.result.checked,
    }
}