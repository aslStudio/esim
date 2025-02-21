import { ViewerApi } from './types.ts'
import {delay} from "@/shared/lib/time.ts";

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
                orders: [],
            }
        }
    }
}