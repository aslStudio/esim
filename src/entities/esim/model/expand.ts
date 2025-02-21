import type { ESIMItem } from './types'
import {createEvent, createStore, sample} from "effector";

const expandSelected = createEvent<ESIMItem>()

const $expand = createStore<ESIMItem | null>(null)

sample({
    clock: expandSelected,
    target: $expand
})

export const expandModule = {
    $expand,
    expandSelected,
}