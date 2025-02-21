import type { AuthApi } from './types.ts'
import {createRequest} from "@/shared/lib/api/createRequest.ts";

export const authApi: AuthApi = {
    auth: async data =>
        createRequest({
            url: 'auth/checkInitData',
            method: 'POST',
            withAuth: false,
            data,
        })
}