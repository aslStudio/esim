import {CreatePaths} from "@/shared/lib";
import {RegionType} from "@/shared/api/enum.ts";

export const en = {
    pages: {
        auth: {
            title: 'Welcome to eSIM',
            description: [
                'Stay online worldwide.',
                'Pay directly in telegram'
            ],
            button: 'Start'
        },
        main: {
            button: 'Order eSIM',
        },
        profile: {
            languageTitle: 'Language'
        },
        create: {
            title: 'Order eSIM',
            region: {
                title: 'Select Country',
                next: 'Next step'
            },
            tariff: {
                title: 'Select Tariff',
                availableTitle: 'Available countries',
                next: 'Next step'
            },
            paymentMethod: {
                title: 'Select payment method',
                alert: [
                    'Please double check',
                    'your tariff details before paying'
                ],
                button: 'Next step'
            }
        }
    },
    widgets: {
        esim: {
            CreateEsimStepper: {
                [CreatePaths.REGION]: {
                    title: 'Step 1: Region',
                    description: 'Select the region in which you will use eSIM'
                },
                [CreatePaths.TARIFF]: {
                    title: 'Step 2: Tariffs',
                    description: 'Сhoose the appropriate tariff'
                },
                [CreatePaths.PAYMENT]: {
                    title: 'Step 3: Payment',
                    description: 'Select a payment method and pay the tariff'
                },
                [CreatePaths.DONE]: {
                    title: 'Step 4: Done',
                    description: 'Almost ready. just need to pay the tariff'
                }
            }
        },
        region: {
            RegionFilter: {
                type: {
                    [RegionType.COUNTRY]: 'Countries',
                    [RegionType.REGION]: 'Regions',
                    [RegionType.GLOBAL]: 'Global',
                },
                placeholder: 'Enter country name'
            }
        }
    }
}