import {CreateEsimStepper} from "@/widgets/esim"

import {useLanguageProvider} from "@/shared/lib/providers"

import styles from './CreateEsimPage.module.scss'
import {Outlet} from "react-router-dom";

export const CreateEsimPage = () => {
    const { content } = useLanguageProvider()
    const { title } = content.pages.create

    return (
        <div className={styles.root}>
            <h1 className={styles.title}>{title}</h1>
            <CreateEsimStepper />
            <Outlet />
        </div>
    )
}