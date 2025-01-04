import { ViewerApi } from './types.ts'
import {delay} from "@/shared/lib/time.ts";
import {PaymentType} from "@/shared/api/enum.ts";

export const viewerApi: ViewerApi = {
    getViewer: async () => {
        await delay()

        console.log('getViewer')

        return {
            error: false,
            payload: {
                avatar: '',
                name: 'name',
                username: 'username',
                orders: [
                    {
                        id: 1235,
                        
                        region: 'Europe',
                        dataSize: 1,
                        days: 7,

                        price: 350,
                        paymentType: PaymentType.STARS,
                    },
                    {
                        id: 1236,

                        region: 'Europe',
                        dataSize: 10,
                        days: 30,

                        price: 5650,
                        paymentType: PaymentType.MAJOR,
                    }
                ]
            }
        }
    }
}