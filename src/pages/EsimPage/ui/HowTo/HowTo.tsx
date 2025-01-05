import {PropsDefault} from "@/shared/lib";
import React from "react";
import {InfoListCard} from "@/shared/ui/InfoListCard";
import {useLanguageProvider} from "@/shared/lib/providers";

export type HowToProps = PropsDefault

export const HowTo: React.FC<HowToProps> = ({
    className
}) => {
    const { content } = useLanguageProvider()
    const { title, description } = content.pages.expand.howTo

    return (
        <InfoListCard
            className={className}
            title={title}
            list={description}
        />
    )
}