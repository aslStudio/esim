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
                next: 'Следующий шаг'
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