import {clsx} from "clsx"

import {useLanguageProvider} from "@/shared/lib/providers"

import { useCreateEsimStep } from './useCreateEsimStep.ts'
import styles from './CreateEsimStepper.module.scss'

export const CreateEsimStepper = () => {
    const {activeStep, activeStepNumber} = useCreateEsimStep()
    const { content } = useLanguageProvider()
    const data = content.widgets.esim.CreateEsimStepper

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