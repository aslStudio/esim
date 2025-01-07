import {CreatePaths} from "@/shared/lib";
import {RegionType} from "@/shared/api/enum.ts";

export const ru = {
    pages: {
        auth: {
            title: 'Добро пожаловать в eSIM',
            description: [
                'Оставайтесь онлайн по всему миру.',
                'Оплачивайте напрямую в Telegram'
            ],
            button: 'Начать'
        },
        main: {
            button: 'Заказать eSIM',
        },
        profile: {
            languageTitle: 'Язык'
        },
        create: {
            title: 'Заказать eSIM',
            region: {
                title: 'Выберете страну',
                next: 'Следующий шаг'
            },
            tariff: {
                title: 'Выберете тариф',
                availableTitle: 'Доступные страны',
                noPhone: [
                    'Данные и звонки только через Интернет',
                    'Этот план не имеет номера'
                ],
                next: 'Следующий шаг'
            },
            paymentMethod: {
                title: 'Выберете метод оплаты',
                alert: [
                    'Пожалуйста, перепроверьте',
                    'выбранный тариф перед оплатой'
                ],
                button: 'Next step'
            },
            done: {
                title: 'Готово!',
                description: 'Оплатите чтобы закончить',
                button: 'Установить eSIM',
                modal: {
                    title: 'Подтвердите оплату',
                    description: 'Вы хотите купить "eSIM план (_Дней)" в eSIM за __?',
                    button: 'Подтвердить и оплатить'
                }
            }
        },
        expand: {
            howTo: {
                title: 'Как установить eSIM',
                description: [
                    'Сделайте снимок или отправьте QR-код на другое устройство',
                    'Убедитесь, что во время установки у вас стабильное соединение Wi-Fi',
                    'Отсканируйте QR-код с помощью телефона, на который вы хотите установить eSIM',
                    'Помните, что QR-код можно использовать только один раз. Не удаляйте его, так как его нельзя будет восстановить'
                ]
            },
            manual: {
                title: 'Для ручной установки используйте следующие данные:',
                smdp: 'SM-DP',
                code: 'Код активации',
            },
            beforeUsing: {
                title: 'Перед использованием esim убедитесь, что',
                description: [
                    'eSIM установлена',
                    'Вы находитесь в регионе, где действует ваш тарифный план',
                    'Мобильные данные включены',
                    'eSIM настроена как ваш тарифный план мобильной связи',
                    'Включен роуминг данных eSIM'
                ]
            },
            button: 'Установите eSIM на ваш телефон',
        }
    },
    widgets: {
        esim: {
            CreateEsimStepper: {
                [CreatePaths.REGION]: {
                    title: 'Шаг 1: Регион',
                    description: 'Выберите регион, в котором вы будете использовать eSIM'
                },
                [CreatePaths.TARIFF]: {
                    title: 'Шаг 2: Тарифы',
                    description: 'Выберите подходящий тариф'
                },
                [CreatePaths.PAYMENT]: {
                    title: 'Шаг 3: Оплата',
                    description: 'Выберите способ оплаты и оплатите тариф'
                },
                [CreatePaths.DONE]: {
                    title: 'Шаг 4: Готово',
                    description: 'Почти готово. Осталось только оплатить тариф.'
                }
            },
            EsimList: {
                title: 'Ваши eSIM',
                button: {
                    hide: 'скрыть заархивированные',
                    show: 'показать заархивированные'
                }
            }
        },
        region: {
            RegionFilter: {
                type: {
                    [RegionType.COUNTRY]: 'Страны',
                    [RegionType.REGION]: 'Регионы',
                    [RegionType.GLOBAL]: 'Глобал',
                },
                placeholder: 'Введите название страны'
            }
        },
        viewer: {
            ViewerOrders: {
                title: 'История заказов'
            }
        }
    },
    entities: {
        esim: {
            EsimCard: {
                days: 'Дней',
                purchase: 'Дата списания',
                iccid: 'ICCID',
                daysLeft: 'Осталось дней',
                dataLeft: 'Данных осталось'
            }
        }
    }
}
