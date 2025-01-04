import {ViewerInfo} from "@/widgets/viewer"
import {EsimList} from "@/widgets/esim"

import {Button} from "@/shared/ui/Button"

import styles from './MainPage.module.scss'

export const MainPage = () => (
    <div className={styles.root}>
        <ViewerInfo />
        <EsimList />
        <Button
            className={styles.button}
            onClick={() => {}}
        >
            Order eSIM
        </Button>
    </div>
)