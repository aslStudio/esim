import React, { createContext, useContext, useState } from "react"
import { Location, useLocation } from "react-router-dom"

type RouterClass = 'fade-in' | 'fade-out'

type Context = {
    displayLocation: Location
    rootClass: RouterClass
    setRootClass: (v: RouterClass) => void
    setDisplayLocation: (v: Location) => void
}

const routeTransitionContext = createContext<Context>({
    displayLocation: {} as Location,
    rootClass: 'fade-in',
    setRootClass: () => {},
    setDisplayLocation: () => {},
})

export const RouteTransitionProvider: React.FC<React.PropsWithChildren> = ({
    children
}) => {
    const location = useLocation()

    const [displayLocation, setDisplayLocation] = useState<Location>(location)
    const [rootClass, setRootClass] = useState<RouterClass>('fade-in')

    return (
        <routeTransitionContext.Provider
            value={{
                displayLocation,
                rootClass,
                setRootClass,
                setDisplayLocation,
            }}
        >
            {children}
        </routeTransitionContext.Provider>
    )
}

export const useRouteTransitionContext = () => useContext(routeTransitionContext)