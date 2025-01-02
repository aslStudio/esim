import {ResponseDefault} from "@/shared/lib/api/createRequest.ts"

export type GetTokenParams = {
    initData: string
}

export type GetTokenResponse = {
    token: string
}

export type TokenApi = {
    getToken: (p: GetTokenParams) =>
        Promise<ResponseDefault<GetTokenResponse>>
}