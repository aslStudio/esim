import {createEffect, createEvent, sample} from "effector";
import {tokenModel} from "@/shared/model";
import {createInstanceStore} from "@/shared/lib/effector";

const onSuccess = createInstanceStore<boolean>(() => {})

const loginFx = createEffect(tokenModel.createToken)

const loggedIn = createEvent()

const $isPending = loginFx.pending

sample({
    clock: loggedIn,
    target: loginFx,
})

sample({
    clock: loginFx.doneData,
    fn: ({ error }) => error,
    target: onSuccess.trigger
})

export const loginModel = {
    $isPending,

    loggedIn,

    onSuccess,
}