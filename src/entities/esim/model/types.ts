import {TimeStamp} from "@/shared/lib";

export type ESIMItem = {
    id: number | string
    name: string
    avatar: string
    region: string
    dataSize: number
    days: number
    isHidden: boolean
    purchaseDate: TimeStamp
    iccid: string
    daysLeft: number
    dataLeft: number

    qrCode: string
    smdp: string
    activationCode: string
}

export type NotPayedESIM = {
    name: string
    avatar: string
    validUntil: TimeStamp
    transactionInfo: {
        receiver: string
        amount: string
        payload: string
    }
}