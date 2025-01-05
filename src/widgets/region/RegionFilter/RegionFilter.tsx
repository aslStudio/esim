import {reflect} from "@effector/reflect"

import {regionListModel} from "@/entities/region/model"

import {useLanguageProvider} from "@/shared/lib/providers"
import {Tabs, TabsProps} from "@/shared/ui/Tabs"
import {RegionType} from "@/shared/api/enum.ts"
import {InputSearch} from "@/shared/ui/InputSearch"

import styles from './RegionFilter.module.scss'

export const RegionFilter = () => {
    const { content } = useLanguageProvider()
    const { type, placeholder } = content.widgets.region.RegionFilter

    const tabsData: TabsProps['data'] = [
        {
            id: RegionType.COUNTRY,
            text: type[RegionType.COUNTRY],
        },
        {
            id: RegionType.REGION,
            text: type[RegionType.REGION],
        },
        {
            id: RegionType.GLOBAL,
            text: type[RegionType.GLOBAL],
        }
    ]

    return (
        <div className={styles.root}>
            <RegionTypeReflect
                data={tabsData}
            />
            <SearchReflect
                placeholder={placeholder}
            />
        </div>
    )
}

const RegionTypeReflect = reflect({
    view: Tabs,
    bind: {
        value: regionListModel.$type,
        setValue: regionListModel.typeUpdated,
    }
})

const SearchReflect = reflect({
    view: InputSearch,
    bind: {
        value: regionListModel.$searchValue,
        setValue: regionListModel.searchUpdated,
        onSearch: regionListModel.searchRequested,
    }
})