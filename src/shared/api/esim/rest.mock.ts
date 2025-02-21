import { delay } from "@/shared/lib/time.ts"
import { getRandomInt } from "@/shared/lib/number.ts"

import { EsimApi } from './types.ts'

export const esimApi: EsimApi = {
    getList: async () => {
        await delay()

        return {
            error: false,
            payload: {
                result: {
                    profiles: getList(),
                },
            },
        }
    },
    getNotPayedEsim: async () => {
        await delay()

        return {
            error: false,
            payload: {
                result: {
                    guid: 'guid',
                    package_info: {
                        name: 'name',
                        image: 'https://img51994.kanal-o.ru/img/2024-09-09/fmt_81_24_shutterstock_2141488197.jpg',
                        codes: ['ru'],
                        package_code: 'package_code',
                        description: 'description',
                        duration: 3000,
                        duration_unit: '',
                        speed: 'speed'
                    },
                    major_price: 3_000,
                    created_at: 'created_at',
                    valid_until: 'valid_until',
                    tx_fill_info: {
                        receiver: 'receiver',
                        amount: 'amount',
                        payload: 'payload',
                    }
                }
            }
        }
    },
    create: async () => {
        await delay()

        return {
            error: false,
            payload: {
                result: {
                    guid: 'guid',
                    tx_fill_info: {
                        receiver: 'receiver',
                        amount: 'amount',
                        payload: 'payload',
                    }
                }
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
        name: 'name',
        image: 'https://img51994.kanal-o.ru/img/2024-09-09/fmt_81_24_shutterstock_2141488197.jpg',
        icc_id: '8975621486489562588',
        days_left: getRandomInt(1, 100),
        data_left: getRandomInt(1, 100),
        expiring_at: '2025-02-18T20:42:07.998Z',
        qr_code_url: 'https://img51994.kanal-o.ru/img/2024-09-09/fmt_81_24_shutterstock_2141488197.jpg',
        smdp: 'smdp',
        activation_code: '123123',
        is_archived: !!getRandomInt(0, 1)
    }))
}