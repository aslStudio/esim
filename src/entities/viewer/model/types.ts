import {PaymentType} from "@/shared/api/enum.ts"

export type Viewer = {
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