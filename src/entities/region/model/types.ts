import {RegionType} from "@/shared/api/enum.ts";

export type Region = {
    id: number | string
    avatar: string
    name: string
    codes: string[]
    type: RegionType
}