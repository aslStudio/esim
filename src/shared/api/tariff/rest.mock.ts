import { TariffApi } from './types.ts'
import {delay} from "@/shared/lib/time.ts";

export const tariffApi: TariffApi = {
    getList: async () => {
        await delay()

        return {
            error: false,
            payload: [
                {
                    id: 1,
                    size: 1,
                    days: 7,
                    price: 1350,
                    dollars: 3.5,
                },
                {
                    id: 2,
                    size: 10,
                    days: 30,
                    price: 2350,
                    dollars: 53.5,
                }
            ]
        }
    }
}