import React, {createContext, useContext, useEffect, useMemo, useState} from "react"

import {Content, en, ru} from "@/shared/assets/lang"

import {Lang} from "./types.ts"
import { getUserLanguage } from './model.ts'

type Context = {
    lang: Lang
    content: Content
    setLang: (lang: Lang) => void
}

const languageContext = createContext<Context>({
    lang: 'en',
    content: en,
    setLang: () => {}
})

export const LanguageProvider: React.FC<React.PropsWithChildren> = ({
    children
}) => {
    const [lang, setLang] = useState<Lang>('en')

    const content = useMemo(() => {
        if (lang === 'ru') {
            return ru
        }

        return en
    }, [lang])

    useEffect(() => {
        setLang(getUserLanguage())
    }, []);

    return (
        <languageContext.Provider
            value={{
                lang,
                setLang,
                content,
            }}
        >
            {children}
        </languageContext.Provider>
    )
}

export const useLanguageProvider = () => useContext(languageContext)