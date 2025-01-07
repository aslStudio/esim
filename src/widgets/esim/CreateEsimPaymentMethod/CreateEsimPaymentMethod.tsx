import React from "react"
import {clsx} from "clsx"
import {useUnit} from "effector-react"

import {createEsimModel} from "@/features/create/model"

import {PropsDefault} from "@/shared/lib"
import {Radio} from "@/shared/ui/Radio";
import {PaymentType} from "@/shared/api/enum.ts"
import {AnimatedIcon} from "@/shared/ui/AnimatedIcon"

import styles from './CreateEsimPaymentMethod.module.scss'
import {images} from "@/shared/assets/images";
import {MajorIcon} from "@/shared/ui/MajorIcon/MajorIcon.tsx";

export const CreateEsimPaymentMethod: React.FC<PropsDefault> = ({
    className
}) => {
    const [
        data
    ] = useUnit([
        createEsimModel.$data
    ])

    return (
        <div
            className={clsx(
                styles.root,
                className,
            )}
        >
            <Radio
                className={styles.radio}
                value={data.paymentType === PaymentType.STARS}
                setValue={v => {
                    if (v) {
                        createEsimModel.paymentTypeUpdated(PaymentType.STARS)
                    }
                }}
            >
                <div className={styles.wrapper}>
                    <AnimatedIcon
                        name={'star'}
                        size={20}
                    />
                    <p>Telegram Stars</p>
                </div>
            </Radio>
            <Radio
                className={styles.radio}
                value={data.paymentType === PaymentType.MAJOR}
                setValue={v => {
                    if (v) {
                        createEsimModel.paymentTypeUpdated(PaymentType.MAJOR)
                    }
                }}
            >
                <div className={styles.wrapper}>
                    <MajorIcon />
                    <p>$MAJOR</p>
                    <img
                        className={styles.sale}
                        src={images.Discount.Sale50}
                        alt={'sale 50%'}
                    />
                </div>
            </Radio>
        </div>
    )
}