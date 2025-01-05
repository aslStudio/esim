import React from "react"

import {PropsDefault} from "@/shared/lib"
import {useLanguageProvider} from "@/shared/lib/providers";
import {InfoListCard} from "@/shared/ui/InfoListCard";

export type BeforeUsingProps = PropsDefault

export const BeforeUsing: React.FC<BeforeUsingProps> = ({
    className
}) => {
    const { content } = useLanguageProvider()
    const { title, description } = content.pages.expand.beforeUsing

    return (
        <InfoListCard
            className={className}
            title={title}
            list={description}
        />
    )
}