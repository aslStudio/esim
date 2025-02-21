import {ResponseDefault} from "@/shared/lib/api/createRequest.ts"

export type AuthParams = {
    init_data: string
}

export type AuthResponse = {
    result: {
        jwt: string
    }
}

export type AuthApi = {
    auth: (p: AuthParams) => Promise<ResponseDefault<AuthResponse>>
}