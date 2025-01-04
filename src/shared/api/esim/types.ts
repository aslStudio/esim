import {TimeStamp} from "@/shared/lib";
import {ResponseDefault} from "@/shared/lib/api/createRequest.ts";

export type GetEsimListResponse = {
    id: number
    avatar: string
    region: string
    dataSize: number
    days: number
    isHidden: boolean
    purchaseDate: TimeStamp
    iccid: string
    daysLeft: number
    dataLeft: number
}[]

export type EsimApi = {
    getList: () =>
        Promise<ResponseDefault<GetEsimListResponse>>
}