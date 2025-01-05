import React from "react"
import {clsx} from "clsx"
import {useUnit} from "effector-react"

import {viewerModel} from "@/entities/viewer/model"

import {CardCollapse} from "@/shared/ui/CardCollapse"
import {PaymentType} from "@/shared/api/enum.ts"
import {PropsDefault} from "@/shared/lib"

import styles from './ViewerOrders.module.scss'
import {useLanguageProvider} from "@/shared/lib/providers";

const paymentTypeMap: Record<PaymentType, string> = {
    [PaymentType.MAJOR]: '$MAJOR',
    [PaymentType.STARS]: 'Telegram Stars',
}

export const ViewerOrders: React.FC<PropsDefault> = ({
    className
}) => {
    const [
        data,
        isPending,
    ] = useUnit([
        viewerModel.$data,
        viewerModel.$isPending
    ])

    const { content } = useLanguageProvider()
    const { title } = content.widgets.viewer.ViewerOrders

    return (
        <CardCollapse
            className={className}
            icon={'clock'}
            title={title}
            isLoading={isPending}
            size={'s'}
        >
            {data.orders.map((order, key) => (
                <>
                    {key > 0 && (
                        <div
                            className={styles.divider}
                        />
                    )}
                    <div>
                        <div
                            className={clsx(
                                styles.row,
                                styles[`row-header`]
                            )}
                        >
                            <p>Order #{order.id}</p>
                            <p>{order.price}</p>
                        </div>
                        <div
                            className={clsx(
                                styles.row,
                                styles[`row-description`]
                            )}
                        >
                            <p>{order.region} - {order.dataSize} GB - {order.days} Days</p>
                            <p>{paymentTypeMap[order.paymentType]}</p>
                        </div>
                    </div>
                </>
            ))}
        </CardCollapse>
    )
}