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

export type CreateEsimParams = {
    regionId: number | string
    tariffId: number | string
}

export type CreateEsimResponse = {
    id: number | string
}

export type GetEsimExpandParams = {
    id: number | string
}

export type GetEsimExpandResponse = {
    id: number | string
    qr: string
    smdp: string
    code: string
}

export type EsimApi = {
    getList: () =>
        Promise<ResponseDefault<GetEsimListResponse>>
    getEsimExpand: (p: GetEsimExpandParams) =>
        Promise<ResponseDefault<GetEsimExpandResponse>>
    create: (p: CreateEsimParams) =>
        Promise<ResponseDefault<CreateEsimResponse>>
}