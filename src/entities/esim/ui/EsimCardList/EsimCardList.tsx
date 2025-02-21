import React from "react"
import {clsx} from "clsx"
import {useNavigate} from "react-router-dom"

import {PropsDefault, RootPaths} from "@/shared/lib"

import {ESIMItem, expandModule} from "../../model"

import { EsimCard } from "../EsimCard"

import styles from './EsimCardList.module.scss'

export type EsimCardListProps = PropsDefault<{
    list: ESIMItem[]
}>

export const EsimCardList: React.FC<EsimCardListProps> = ({
    className,
    list,
}) => {
    const navigate = useNavigate()

    return (
        <div
            className={clsx(
                styles.root,
                className,
            )}
        >
            {list.map(item => (
                <EsimCard
                    key={item.id}
                    {...item}
                    onClick={() => {
                        expandModule.expandSelected(item)
                        navigate(RootPaths.ESIM)
                    }}
                />
            ))}
        </div>
    )
}