import { tokenModel } from "@/shared/model"
import { ENV } from "@/env.ts"

export type SuccessResponse<T> = {
    error: false,
    payload: T
}

export type FailureResponse = {
    error: true,
    payload: null
}

export type ResponseDefault<T = null> = SuccessResponse<T> | FailureResponse

export async function createRequest<T>({
    withAuth = true,
    headers,
    ...data
}: {
    url: string
    method: 'POST' | 'GET' | 'PUT' | 'DELETE',
    data?: Record<string, unknown>,
    withAuth?: boolean
    headers?: Record<string, string>
}): Promise<ResponseDefault<T>> {
    try {
        const token = window.localStorage.getItem('JWT_TOKEN')

        const url = `${ENV.VITE_API_URL}/${data.url}`

        const response = await fetch(
            url,
            {
                headers: {
                    'Content-Type': 'application/json',
                    ...(data.method === 'GET' && data.data && {
                        'Content-Length': JSON.stringify(data.data).length.toString()
                    }),
                    ...(withAuth && {
                        Authorization: `Bearer ${token}`,
                    }),
                    ...(headers && {
                        ...headers
                    })
                },
                method: data.method,
                ...(data.data && {
                    body: JSON.stringify(data.data)
                })
            }
        )

        const payload = await response.json()

        if (response.ok) {
            return {
                error: false,
                payload,
            }
        }

        if (response.status === 401 && withAuth) {
            const { error } = await tokenModel.createToken()

            if (!error) {
                return createRequest<T>({
                    withAuth: true,
                    ...data,
                })
            }
        }

        return {
            error: true,
            payload: null
        }
    } catch (e) {
        console.log(e)
        return {
            error: true,
            payload: null
        }
    }
}