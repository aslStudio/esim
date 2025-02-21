import React from "react"
import {clsx} from "clsx"
import {useTonAddress, useTonConnectUI, useTonWallet} from "@tonconnect/ui-react"

import {Icon} from "@/shared/ui/Icon"
import {PropsDefault} from "@/shared/lib"

import styles from './ViewerWallet.module.scss'

export const ViewerWallet: React.FC<PropsDefault> = ({ className }) => {
    const [tonConnectUI] = useTonConnectUI()
    const wallet = useTonWallet()
    const userFriendlyAddress = useTonAddress()

    const shortenAddress = (address: string) => {
        if (address.length <= 10) return address

        const start = address.slice(0, 4)
        const end = address.slice(-4)

        return `${start}...${end}`
    }

    return (
        <div
            className={clsx(styles.root, className)}
            onClick={async () => {
                if (wallet) {
                    await tonConnectUI.disconnect()
                    await tonConnectUI.openModal()
                } else {
                    await tonConnectUI.openModal()
                }
            }}
        >
            <div className={styles.info}>
                <Icon
                    name={'wallet'}
                    view={'brand'}
                    size={25}
                />
                <p>Wallet</p>
            </div>
            {wallet && (
                <p>{shortenAddress(userFriendlyAddress)}</p>
            )}
            {!wallet && (
                <button className={styles.button}>Connect Wallet</button>
            )}
        </div>
    )
}