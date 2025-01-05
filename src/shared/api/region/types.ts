import {ResponseDefault} from "@/shared/lib/api/createRequest.ts";
import {RegionType} from "@/shared/api/enum.ts";

export type GetRegionParams = {
    search: string
    type: RegionType
}

export type GetRegionResponse = {
    id: number | string
    avatar: string
    name: string
}[]

export type GetAvailableCountriesParams = {
    region: number | string
}

export type GetAvailableCountriesResponse =
    string[]

export type RegionApi = {
    getList: (p: GetRegionParams) =>
        Promise<ResponseDefault<GetRegionResponse>>
    getAvailableCountries: (p: GetAvailableCountriesParams) =>
        Promise<ResponseDefault<GetAvailableCountriesResponse>>
}