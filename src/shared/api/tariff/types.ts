import {ResponseDefault} from "@/shared/lib/api/createRequest.ts"
import {RegionType} from "@/shared/api/enum.ts"

export type GetTariffListParams = {
    region: {
        id: number | string
        avatar: string
        name: string
        codes: string[]
        type: RegionType
    }
}

export type GetTariffListResponse = {
    result: {
        packs: {
            name: string
            image: string
            codes: string[],
            package_code: string
            type: RegionType
            price_usd: number
            price_major: number
            description: string
            duration: number
            duration_unit: string
            speed: string
        }[]
    }
}

export type TariffApi = {
    getList: (p: GetTariffListParams) =>
        Promise<ResponseDefault<GetTariffListResponse>>
}