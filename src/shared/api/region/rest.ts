import { RegionApi } from './types'
import {createRequest} from "@/shared/lib/api/createRequest.ts";
import {delay} from "@/shared/lib/time.ts";

export const regionApi: RegionApi = {
    getList: async ({ type }) =>
        createRequest({
            url: `main/locations?type=${type}`,
            method: 'GET',
        }),
    getAvailableCountries: async () => {
        await delay()

        return {
            error: false,
            payload: Array(25).fill('country')
        }
    }
}