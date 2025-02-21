import {CreatePaths} from "@/shared/lib";
import {RegionType} from "@/shared/api/enum.ts";

export const en = {
    pages: {
        auth: {
            title: 'Welcome to eSIM',
            description: [
                'by Stable App',
                'Stay connected around the world.',
                'Launch on Telegram and with Major'
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
                noPhone: [
                    'Data and calls over the Internet only',
                    'This plan does not come with a number'
                ],
                next: 'Next step'
            },
            paymentMethod: {
                title: 'Select payment method',
                alert: [
                    'Please double check',
                    'your tariff details before paying'
                ],
                button: 'Next step',
                buttonConnect: 'Connect wallet',
            },
            done: {
                title: 'Done!',
                description: 'Please pay to complete',
                button: 'Install eSIM',
                modal: {
                    title: 'Confirm Your Purchase',
                    description: 'Do you want to buy "eSIM plan (_Days)" in eSIM for __?',
                    button: 'Confirm And Pay'
                }
            }
        },
        expand: {
            howTo: {
                title: 'How to install eSIM',
                description: [
                    'Take a photo or send the QR code  to another device',
                    'Make sure you have a stable Wi-Fi connection  during installation',
                    'Scan the QR code with the phone you want  to install the eSIM on',
                    'Remember that the QR code can only be  used once. Do not delete it, as it cannot  be reinstalled'
                ]
            },
            manual: {
                title: 'For manual installation, use the following data:',
                smdp: 'SM-DP',
                code: 'Activation code',
            },
            beforeUsing: {
                title: 'Before using esim, make sure that',
                description: [
                    'eSIM is installed',
                    'you are located in the region where your  data plan operates',
                    'Mobile data is enabled',
                    'The eSIM is set as your mobile data plan',
                    'eSIM data roaming is enabled'
                ]
            },
            button: 'Install the eSIM on this device'
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
            },
            EsimList: {
                title: 'Yours eSIMS',
                button: {
                    hide: 'hide archive',
                    show: 'show archive'
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
        },
        viewer: {
            ViewerOrders: {
                title: 'Order history'
            }
        }
    },
    entities: {
        esim: {
            EsimCard: {
                days: 'Days',
                purchase: 'Date of purchase',
                iccid: 'ICCID',
                daysLeft: 'Days left',
                dataLeft: 'Data left'
            },
            NotPayedEsimCard: {
                inProcess: 'Payment in progress',
                button: 'Finish the purchase of eSIM'
            }
        }
    }
}