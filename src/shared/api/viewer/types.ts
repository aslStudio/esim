import {ResponseDefault} from "@/shared/lib/api/createRequest.ts";
import {PaymentType} from "@/shared/api/enum.ts";

export type GetViewerResponse = {
    avatar?: string
    name: string
    username: string
    orders: {
        id: number

        region: string
        dataSize: number
        days: number

        price: number
        paymentType: PaymentType
    }[]
}

export type ViewerApi = {
    getViewer: () =>
        Promise<ResponseDefault<GetViewerResponse>>
}