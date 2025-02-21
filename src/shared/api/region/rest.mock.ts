import {delay} from "@/shared/lib/time.ts"

import { RegionApi } from './types.ts'
import {getRandomInt} from "@/shared/lib/number.ts";

export const regionApi: RegionApi = {
    getList: async ({ type }) => {
        await delay()

        return {
            error: false,
            payload: {
                result: {
                    locations: Array(getRandomInt(1, 10)).fill(1).map(() => ({
                        image: 'https://img51994.kanal-o.ru/img/2024-09-09/fmt_81_24_shutterstock_2141488197.jpg',
                        name: `NAME ${getRandomInt(1, 10_000)}`,
                        type,
                        codes: [`CODE-${getRandomInt(0, 100)}`]
                    }))
                }
            }
        }
    },
    getAvailableCountries: async () => {
        await delay()

        return {
            error: false,
            payload: Array(25).fill('country')
        }
    }
}