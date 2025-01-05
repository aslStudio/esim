import React, { useEffect } from "react"
import { Navigate, Route, Routes, useLocation } from "react-router-dom"

import { AuthPage } from "@/pages/AuthPage"
import { MainPage } from "@/pages/MainPage"
import { ProfilePage } from "@/pages/ProfilePage"
import {
    CreateEsimPage,
    CreateEsimRegionPage,
    CreateEsimTariffPage,
    CreateEsimPaymentMethodPage,
    CreateEsimDonePage,
} from "@/pages/CreateEsimPage"
import { EsimPage } from "@/pages/EsimPage"

import { CreatePaths, RootPaths } from "@/shared/lib"
import { tokenModel } from "@/shared/model"
import { useRouteTransitionContext } from "@/shared/lib/providers/RouteTransitionProvider"

export const RouterView = () => {
    const location = useLocation()
    const {
        displayLocation,
        rootClass,
        setRootClass,
        setDisplayLocation,
    } = useRouteTransitionContext()

    useEffect(() => {
        const locationRoot = location.pathname.split('/')[1]
        const displayRoot = displayLocation.pathname.split('/')[1]

        if (locationRoot !== displayRoot) {
            setRootClass("fade-out")
        }

        setTimeout(() => {
            setRootClass('fade-in')
            setDisplayLocation(location)
        }, 300)
    }, [location, displayLocation]);

    return (
        <div
            className={rootClass}
        >
            <Routes location={displayLocation}>
                <Route
                    path={RootPaths.AUTH}
                    element={(
                        <CheckIsLoginRoute>
                            <AuthPage />
                        </CheckIsLoginRoute>
                    )}
                />
                <Route
                    path={RootPaths.MAIN}
                    element={(
                        <PrivateRoute>
                            <MainPage />
                        </PrivateRoute>
                    )}
                />
                <Route
                    path={RootPaths.PROFILE}
                    element={(
                        <PrivateRoute>
                            <ProfilePage />
                        </PrivateRoute>
                    )}
                />
                <Route
                    path={RootPaths.CREATE}
                    element={(
                        <PrivateRoute>
                            <CreateEsimPage />
                        </PrivateRoute>
                    )}
                >
                    <Route
                        path={CreatePaths.REGION}
                        element={<CreateEsimRegionPage />}
                    />
                    <Route
                        path={CreatePaths.TARIFF}
                        element={<CreateEsimTariffPage />}
                    />
                    <Route
                        path={CreatePaths.PAYMENT}
                        element={<CreateEsimPaymentMethodPage />}
                    />
                    <Route
                        path={CreatePaths.DONE}
                        element={<CreateEsimDonePage />}
                    />
                </Route>
                <Route
                    path={RootPaths.ESIM}
                    element={<EsimPage />}
                />
                <Route
                    path={RootPaths.ANOTHER}
                    element={<AnotherRoute />}
                />
            </Routes>
        </div>
    )
}

const PrivateRoute: React.FC<React.PropsWithChildren> = ({
    children
}) => {
    const token = tokenModel.getAccessToken()

    if (!token) {
        return (
            <Navigate 
                to={`${RootPaths.AUTH}`}
                replace
            />
        )
    }

    return (
        <>
            {children}
        </>
    )
}

const CheckIsLoginRoute: React.FC<React.PropsWithChildren> = ({
    children
}) => {
    const token = tokenModel.getAccessToken()

    if (token) {
        return (
            <Navigate 
                to={`${RootPaths.MAIN}`}
                replace
            />
        )
    }

    return (
        <>{children}</>
    )
}

const AnotherRoute = () => {
    const token = tokenModel.getAccessToken()

    if (token) {
        return (
            <Navigate 
                to={`${RootPaths.MAIN}`}
                replace
            />
        )
    }

    return (
        <Navigate 
            to={`${RootPaths.AUTH}`}
            replace
        />
    )
}