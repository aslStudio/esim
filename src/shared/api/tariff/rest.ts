import {TariffApi} from './types.ts'
import {RegionType} from "@/shared/api/enum.ts";
import {createRequest} from "@/shared/lib/api/createRequest.ts";

export const tariffApi: TariffApi = {
    getList: async ({ region }) => {
        if (region.type === RegionType.COUNTRY) {
            return createRequest({
                url: `main/countryPacks?locationCode=${region.codes[0]}`,
                method: 'GET',
            })
        }

        if (region.type === RegionType.REGION) {
            return createRequest({
                url: `main/regionPacks?region=${region.name}`,
                method: 'GET',
            })
        }

        return createRequest({
            url: 'main/globalPacks',
            method: 'GET',
        })
    }
}