import {useMemo} from "react"
import {useLocation} from "react-router-dom"
import {clsx} from "clsx"

import {useLanguageProvider} from "@/shared/lib/providers"
import {CreatePaths} from "@/shared/lib"

import styles from './CreateEsimStepper.module.scss'

export const CreateEsimStepper = () => {
    const location = useLocation()

    const { content } = useLanguageProvider()
    const data = content.widgets.esim.CreateEsimStepper

    const activeStep = useMemo(() => {
        if (location.pathname.includes(CreatePaths.REGION)) {
            return CreatePaths.REGION
        }
        if (location.pathname.includes(CreatePaths.TARIFF)) {
            return CreatePaths.TARIFF
        }
        if (location.pathname.includes(CreatePaths.PAYMENT)) {
            return CreatePaths.PAYMENT
        }

        return CreatePaths.DONE
    }, [location])

    const activeStepNumber = useMemo(() => {
        if (activeStep === CreatePaths.DONE) {
            return 4
        }
        if (activeStep === CreatePaths.PAYMENT) {
            return 3
        }
        if (activeStep === CreatePaths.TARIFF) {
            return 2
        }
        return 1
    }, [activeStep])

    return (
        <div className={styles.root}>
            <p className={styles.title}>{data[activeStep].title}</p>
            <p className={styles.description}>{data[activeStep].description}</p>
            <div className={styles.stepper}>
                <div
                    className={clsx(
                        styles.dot,
                        {
                            [styles['is-active']]: activeStepNumber >= 1
                        }
                    )}
                />
                <div
                    className={clsx(
                        styles.line,
                        {
                            [styles['is-active']]: activeStepNumber >= 2
                        }
                    )}
                />
                <div
                    className={clsx(
                        styles.dot,
                        {
                            [styles['is-active']]: activeStepNumber >= 2
                        }
                    )}
                />
                <div
                    className={clsx(
                        styles.line,
                        {
                            [styles['is-active']]: activeStepNumber >= 3
                        }
                    )}
                />
                <div
                    className={clsx(
                        styles.dot,
                        {
                            [styles['is-active']]: activeStepNumber >= 3
                        }
                    )}
                />
                <div
                    className={clsx(
                        styles.line,
                        {
                            [styles['is-active']]: activeStepNumber >= 4
                        }
                    )}
                />
                <div
                    className={clsx(
                        styles.dot,
                        {
                            [styles['is-active']]: activeStepNumber >= 4
                        }
                    )}
                />
            </div>
        </div>
    )
}