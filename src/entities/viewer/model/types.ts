import {PaymentType} from "@/shared/api/enum.ts"

export type Viewer = {
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