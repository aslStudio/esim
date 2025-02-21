import {createEffect, createEvent, createStore, sample} from "effector";
import {authApi, AuthResponse} from "@/shared/api/auth";
import {getInitData} from "@/shared/lib/hooks";
import {ResponseDefault} from "@/shared/lib/api/createRequest.ts";
import {createInstanceStore} from "@/shared/lib/effector";

const authFx = createEffect(authApi.auth)
const setIsWasLoggedIn = createEffect(async (data: ResponseDefault<AuthResponse>) => {
    window.localStorage.setItem('JWT_TOKEN', String(data.payload?.result.jwt))
    window.localStorage.setItem('IS_WAS_LOGGED_IN', 'true')
})

const onSuccess = createInstanceStore<boolean>(() => {})

const login = createEvent()
const leave = createEvent()

const $isLoggedIn = createStore(false)
const $isPending = authFx.pending

$isLoggedIn.watch(v => console.log('IS_LOGGED_IN', v))

sample({
    clock: login,
    fn: () => ({
        init_data: getInitData(),
        inviter_id: 0,
    }),
    target: authFx,
})

sample({
    clock: authFx.doneData,
    target: [setIsWasLoggedIn, onSuccess.trigger]
})

sample({
    clock: setIsWasLoggedIn.doneData,
    fn: () => true,
    target: $isLoggedIn,
})

sample({
    clock: leave,
    fn: () => false,
    target: $isLoggedIn,
})

export const authModel = {
    $isLoggedIn,
    $isPending,

    login,
    leave,

    onSuccess,
}