import {createEffect, createStore, sample} from "effector"

import {GetTariffListResponse, tariffApi} from "@/shared/api/tariff"

import { Tariff } from './types.ts'
import {ResponseDefault} from "@/shared/lib/api/createRequest.ts";

const fetchFx = createEffect(tariffApi.getList)

const $isPending = fetchFx.pending
const $list = createStore<Tariff[]>([])

sample({
    clock: fetchFx.doneData,
    fn: toDomain,
    target: $list,
})

export const tariffListModel = {
    $list,
    $isPending,
    fetchFx,
}

function toDomain(data: ResponseDefault<GetTariffListResponse>) {
    function extractData(str: string) {
        const match = str.match(/(\d+)GB\s+(\d+)Days/)

        if (match) {
            return { gb: parseInt(match[1], 10), days: parseInt(match[2], 10) }
        }
        return null
    }

    if (data.payload) {
        return data.payload.result.packs.map((item, key) => ({
            id: key,
            size: extractData(item.name)?.gb ?? 0,
            days: extractData(item.name)?.days ?? 0,
            price: item.price_major,
            dollars: item.price_usd,
            codes: item.codes,
            package_code: item.package_code,
        }))
    }

    return []
}