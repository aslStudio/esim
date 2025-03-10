import React, {useCallback, useEffect, useMemo, useState} from "react"
import {clsx} from "clsx"

import {esimListModel, NotPayedESIM} from "@/entities/esim/model"

import {PropsDefault} from "@/shared/lib"
import {useLanguageProvider} from "@/shared/lib/providers"
import {publicPaths} from "@/shared/assets/public.ts"

import styles from './NotPayedEsimCard.module.scss'
import {Icon} from "@/shared/ui/Icon";
import {useTonConnectUI, useTonWallet} from "@tonconnect/ui-react";
import {esimApi} from "@/shared/api/esim";
import {Loader} from "@/shared/ui/Loader";

let interval: ReturnType<typeof setInterval>

export const NotPayedEsimCard: React.FC<PropsDefault<NotPayedESIM>> = ({
    className,
    name,
    avatar,
    validUntil,
    isPayed,
}) => {
    const wallet = useTonWallet()
    const [tonConnectUI] = useTonConnectUI();
    const { content } = useLanguageProvider()
    const { button, inProcess } = content.entities.esim.NotPayedEsimCard

    const [timer, setTimer] = useState(15_000)

    const imgPath = useMemo(() => {
        if (!avatar) {
            return ''
        }

        if (avatar.includes('/')) {
            return `https://p.qrsim.net${avatar}`
        }

        const name = avatar.toLowerCase().split(' ').join('_')

        return publicPaths.regions[name as keyof typeof publicPaths.regions] ?? ''
    }, [avatar])

    const validUntilFormatted = useMemo(() => {
        const minutes = Math.floor(timer / 60000);
        const seconds = Math.floor((timer % 60000) / 1000);

        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, [timer])

    const onPay = useCallback(async () => {
        if (wallet) {
            try {
                const response = await esimApi.getTransactionData({ wallet: wallet.account.address })
                if (!response.error && response.payload.result) {
                    await tonConnectUI.sendTransaction({
                        validUntil: Math.floor(Date.now() / 1000) + 360,
                        messages: [
                            {
                                address: response.payload.result.receiver,
                                amount: response.payload.result.amount,
                                payload: response.payload.result.payload,
                            }
                        ]
                    })
                }

                await esimApi.checkoutTransaction()
                await esimListModel.fetchFx()
            } catch (e) {
                console.log(e)
            }
        } else {
            // await tonConnectUI.disconnect()
            await tonConnectUI.openModal()
        }
    }, [tonConnectUI, wallet])

    useEffect(() => {
        const curr = new Date().getTime()
        setTimer(Math.max(validUntil - curr, 0))
        clearInterval(interval)
        interval = setInterval(() => {
            setTimer(prevState => Math.max(prevState - 1000, 0))
        }, 1000)
    }, [validUntil]);

    useEffect(() => {
        if (timer <= 0) {
            esimListModel.notPayedExipered()
        }
    }, [timer]);

    return (
        <div
            className={clsx(
                className,
                styles.root,
            )}
        >
            <div className={styles.header}>
                {imgPath && (
                    <div className={styles.avatar}>
                        <img
                            src={imgPath}
                            alt={'avatar'}
                        />
                    </div>
                )}
                <p className={styles.title}>{name}</p>
            </div>
            {!isPayed && (
                <div className={styles.bottom}>
                    <div className={styles.timer}>
                        <Icon
                            name={'clock'}
                            size={16}
                            view={'base'}
                        />
                        <p>{validUntilFormatted}</p>
                    </div>
                    <button onClick={onPay}>{button}</button>
                </div>
            )}
            {isPayed && (
                <div className={styles.bottom}>
                    <div className={styles.timer}>
                        <Loader
                            color={'brand'}
                            size={'xs'}
                        />
                        <p>{inProcess}</p>
                    </div>
                </div>
            )}
        </div>
    )
}