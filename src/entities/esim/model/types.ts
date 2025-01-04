import {TimeStamp} from "@/shared/lib";

export type ESIMItem = {
    id: number | string
    avatar: string
    region: string
    dataSize: number
    days: number
    isHidden: boolean
    purchaseDate: TimeStamp
    iccid: string
    daysLeft: number
    dataLeft: number
}