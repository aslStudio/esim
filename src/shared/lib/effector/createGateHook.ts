import { useEffect } from "react"
import {createEffect, createStore, sample} from "effector"
import { createGate, useUnit } from "effector-react"

export function createFetch<T extends () => Promise<unknown>>(request: T) {
    const FetchGate = createGate()

    const fetchFx = createEffect(request)

    const $isPending = createStore(true)

    sample({
        clock: fetchFx.pending,
        fn: () => true,
        target: $isPending
    })

    sample({
        clock: fetchFx.doneData,
        fn: () => false,
        target: $isPending
    })

    const useFetchGate = () => {
        useEffect(() => {
            FetchGate.open(0)
        }, [])

        return {
            isLoading: useUnit($isPending)
        }
    }

    return [
        fetchFx,
        useFetchGate,
        FetchGate,
        $isPending
    ] as const
}