import {ViewerInfo} from "@/widgets/viewer"
import {EsimList} from "@/widgets/esim"

import styles from './MainPage.module.scss'

export const MainPage = () => (
    <div className={styles.root}>
        <ViewerInfo />
        <EsimList />
    </div>
)