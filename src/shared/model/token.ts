import { tokenApi } from "@/shared/api/token"
import {TelegramWindow} from "@/shared/lib/hooks/useTelegram.ts";

export const TOKEN_ACCESS_STORAGE = 'TOKEN_ACCESS_STORAGE'

function getAccessToken() {
    return localStorage.getItem(TOKEN_ACCESS_STORAGE)
}

async function createToken() {
    try {
        const tg = (window as unknown as TelegramWindow)

        const { payload, error } = await tokenApi.getToken({
            initData: tg.Telegram?.WebApp?.initData as unknown as string
        })

        if (payload && !error) {
            localStorage.setItem(TOKEN_ACCESS_STORAGE, payload.token)
            return {
                error: false
            }
        }

        return {
            error: true
        }
    } catch (e) {
        console.log(e)
        return {
            error: true
        }
    }
}

function clearToken() {
    localStorage.removeItem(TOKEN_ACCESS_STORAGE)
}

export const tokenModel = {
    getAccessToken,
    createToken,
    clearToken,
}