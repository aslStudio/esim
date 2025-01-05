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
                title: 'Выберете тарифф',
                availableTitle: 'Доступные страны',
                next: 'Следующий шаг'
            },
            paymentMethod: {
                title: 'Выберете метод оплаты',
                alert: [
                    'Пожалуйста, перепроверьте',
                    'выбранный тарифф перед оплатой'
                ],
                button: 'Next step'
            },
            done: {
                title: 'Готово!',
                description: 'Оплатите чтобы закончить',
                button: 'Оплатить',
                modal: {
                    title: 'Подтвердите оплату',
                    description: 'Вы хотите купить "eSIM план (_Дней)" в eSIM за __?',
                    button: 'Подтвердить и оплатить'
                }
            }
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
        }
    }
}