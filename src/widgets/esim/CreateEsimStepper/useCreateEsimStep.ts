import {useEffect, useMemo} from "react"
import {useLocation} from "react-router-dom"

import {CreatePaths} from "@/shared/lib"

export const useCreateEsimStep = () => {
    const location = useLocation()

    const activeStep = useMemo(() => {
        if (location.pathname.includes(CreatePaths.REGION)) {
            return CreatePaths.REGION
        }
        if (location.pathname.includes(CreatePaths.TARIFF)) {
            return CreatePaths.TARIFF
        }
        if (location.pathname.includes(CreatePaths.PAYMENT)) {
            return CreatePaths.PAYMENT
        }

        return CreatePaths.DONE
    }, [location])

    const activeStepNumber = useMemo(() => {
        if (activeStep === CreatePaths.DONE) {
            return 4
        }
        if (activeStep === CreatePaths.PAYMENT) {
            return 3
        }
        if (activeStep === CreatePaths.TARIFF) {
            return 2
        }
        return 1
    }, [activeStep, location])

    useEffect(() => {
        console.log(activeStepNumber)
    }, [activeStepNumber]);

    return {
        activeStep,
        activeStepNumber
    }
}