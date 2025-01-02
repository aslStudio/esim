import { TokenApi } from './types.ts'
import {delay} from "@/shared/lib/time.ts";

export const tokenApi: TokenApi = {
    getToken: async () => {
        await delay()

        return {
            error: false,
            payload: {
                token: 'TOKEN',
            }
        }
    }
}