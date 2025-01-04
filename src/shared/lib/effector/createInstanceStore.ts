import { attach, createEvent, createStore } from 'effector'

export const createInstanceStore = <P = unknown, T extends (params: P) => void = () => void>(
    defaultValue: T,
) => {
    const $instance = createStore<T>(defaultValue)

    const set = createEvent<T>()
    $instance.on(set, (_, payload) => payload)

    const trigger = attach({
        source: {
            instance: $instance,
        },
        async effect({ instance }, params: P) {
            instance(params)
        },
    })

    return {
        set,
        trigger,
        $instance,
    }
}