import {TelegramWindow} from "@/shared/lib/hooks/useTelegram.ts"

import {Lang} from "./types.ts"

const LANG_STORAGE_NAME = 'LANGUAGE'

export function getUserLanguage(): Lang {
    const tg = (window as unknown as TelegramWindow)
    const savedLanguage = window.localStorage.getItem(LANG_STORAGE_NAME)

    if (isValidLanguage(savedLanguage)) {
        return savedLanguage
    }

    const preferLanguage = tg.Telegram?.WebApp?.initDataUnsafe.user.language_code
    if (preferLanguage && (preferLanguage === 'ru' || preferLanguage === 'en')) {
        setUserLanguage(preferLanguage)
        return preferLanguage
    }

    setUserLanguage('en')
    return 'en'
}

function isValidLanguage(v: string | null | undefined): v is Lang {
    if (v) {
        return v === 'ru' || v === 'en'
    }

    return false
}

function setUserLanguage(v: string): void {
    window.localStorage.setItem(LANG_STORAGE_NAME, v)
}