import {ResponseDefault} from "@/shared/lib/api/createRequest.ts";

export type GetTariffListParams = {
    region: string | number
}

export type GetTariffListResponse = {
    id: number
    size: number
    days: number
    stars: number
    dollars: number
}[]

export type TariffApi = {
    getList: (p: GetTariffListParams) =>
        Promise<ResponseDefault<GetTariffListResponse>>
}