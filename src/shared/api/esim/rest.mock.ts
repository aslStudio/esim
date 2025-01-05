import {delay} from "@/shared/lib/time.ts"

import { EsimApi } from './types.ts'
import {getRandomInt} from "@/shared/lib/number.ts";

export const esimApi: EsimApi = {
    getList: async () => {
        await delay()

        return {
            error: false,
            payload: getList(),
        }
    },
    create: async () => {
        await delay()

        return {
            error: false,
            payload: {
                id: getRandomInt(0, 10_000)
            }
        }
    },
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
    }
}

function getList() {
    return Array(getRandomInt(1, 10)).fill(1).map(() => ({
        id: getRandomInt(1, 10_000),
        avatar: 'https://img51994.kanal-o.ru/img/2024-09-09/fmt_81_24_shutterstock_2141488197.jpg',
        region: `region ${getRandomInt(1, 10_000)}`,
        dataSize: getRandomInt(1, 100),
        days: getRandomInt(1, 100),
        isHidden: !!getRandomInt(0, 1),
        purchaseDate: new Date().getTime(),
        iccid: '8975621486489562588',
        daysLeft: getRandomInt(1, 100),
        dataLeft: getRandomInt(1, 100),
    }))
}