import { delay } from "@/shared/lib/time.ts"
import { getRandomInt } from "@/shared/lib/number.ts"
import {createRequest} from "@/shared/lib/api/createRequest.ts"

import { EsimApi } from './types.ts'

export const esimApi: EsimApi = {
    getList: async () =>
        createRequest({
            url: 'main/packs',
            method: 'POST',
        }),
    getNotPayedEsim: async () =>
        createRequest({
            url: 'orders/active',
            method: 'GET',
        }),
    create: async data =>
        createRequest({
            url: 'orders/create',
            method: 'POST',
            data,
        }),
    getEsimExpand: async () => {
        await delay()

        return {
            error: false,
            payload: {
                id: getRandomInt(1, 10_000),
                qr: 'https://img51994.kanal-o.ru/img/2024-09-09/fmt_81_24_shutterstock_2141488197.jpg',
                smdp: 'smdp.io',
                code: 'K2-29NKKA-XN1XCD'
            }
        }
    },
    getTransactionData: async ({ wallet }) =>
        createRequest({
            url: `orders/txFillInfo?wallet=${wallet}`,
            method: 'GET'
        }),
    checkoutTransaction: async () =>
        createRequest({
            url: 'orders/checkout',
            method: 'POST'
        })
}