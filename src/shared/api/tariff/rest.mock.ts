import { TariffApi } from './types.ts'
import {delay} from "@/shared/lib/time.ts";

export const tariffApi: TariffApi = {
    getList: async () => {
        await delay()

        return {
            error: false,
            payload: {
                result: {
                    packs: [],
                }
            }
        }
    }
}