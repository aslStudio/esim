import React from "react"

import {useLanguageProvider} from "@/shared/lib/providers"
import {Radio} from "@/shared/ui/Radio"
import {PropsDefault} from "@/shared/lib"

import styles from './LanguageSelect.module.scss'
import {clsx} from "clsx";
import {images} from "@/shared/assets/images";

export const LanguageSelect: React.FC<PropsDefault> = ({
    className
}) => {
    const { lang, setLang } = useLanguageProvider()

    return (
        <div
            className={clsx(
                styles.root,
                className,
            )}
        >
            <Radio
                value={lang === 'ru'}
                setValue={() => setLang('ru')}
            >
                <div className={styles.wrapper}>
                    <img
                        className={styles.flag}
                        src={images.Language.RU}
                        alt={'ru-flag'}
                    />
                    <p>Русский</p>
                </div>
            </Radio>
            <div
                className={styles.divider}
            />
            <Radio
                value={lang === 'en'}
                setValue={() => setLang('en')}
            >
                <div className={styles.wrapper}>
                    <img
                        className={styles.flag}
                        src={images.Language.GB}
                        alt={'gb-flag'}
                    />
                    <p>English</p>
                </div>
            </Radio>
        </div>
    )
}