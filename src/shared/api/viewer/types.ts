import {ResponseDefault} from "@/shared/lib/api/createRequest.ts";
import {PaymentType} from "@/shared/api/enum.ts";

export type GetViewerResponse = {
    avatar?: string
    name: string
    username: string
    orders: {
        id: number
        name: string
        price: number
        paymentType: PaymentType
    }[]
}

export type GetViewerOrdersResponse = {
    result: {
        orders: {
            id: number
            package_name: string
            guid: string
            major_price: number
        }[]
    }
}

export type ViewerApi = {
    getViewer: () =>
        Promise<ResponseDefault<GetViewerResponse>>
}