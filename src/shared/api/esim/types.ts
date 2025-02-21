import {ResponseDefault} from "@/shared/lib/api/createRequest.ts";

export type GetEsimListResponse = {
    result: {
        profiles: {
            name: string
            image: string
            iccid: string
            days_left: number
            data_left: number
            expiring_at: string
            qr_code_url: string
            smdp: string
            activation_code: string
            is_archived: boolean
        }[]
    }
}

export type GetNotPayedEsimResponse = {
    result: {
        guid: string
        package_info: {
            name: string
            image: string
            codes: string[]
            package_code: string
            description: string
            duration: number
            duration_unit: string
            speed: string
        },
        major_price: number
        created_at: string
        valid_until: string
        checked: boolean
    }
}

export type CreateEsimParams = {
    package_code: string
}

export type CreateEsimResponse = {
    result: {
        guid: string
        valid_until: string
        tx_fill_info: {
            receiver: string
            amount: string
            payload: string
        }
    }
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

export type GetTransactionDataParams = {
    wallet: string
}

export type GetTransactionDataResponse = {
    result: {
        receiver: string
        amount: string
        payload: string
    }
}

export type EsimApi = {
    getList: () =>
        Promise<ResponseDefault<GetEsimListResponse>>
    getNotPayedEsim: () =>
        Promise<ResponseDefault<GetNotPayedEsimResponse>>
    getEsimExpand: (p: GetEsimExpandParams) =>
        Promise<ResponseDefault<GetEsimExpandResponse>>
    create: (p: CreateEsimParams) =>
        Promise<ResponseDefault<CreateEsimResponse>>
    getTransactionData: (p: GetTransactionDataParams) => Promise<ResponseDefault<GetTransactionDataResponse>>
    checkoutTransaction: () => Promise<ResponseDefault<null>>
}