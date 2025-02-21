import { getInitDataUnsafe } from "@/shared/lib/hooks"

import { type ViewerApi, type GetViewerOrdersResponse } from './types'
import {createRequest} from "@/shared/lib/api/createRequest.ts";
import {PaymentType} from "@/shared/api/enum.ts";

export const viewerApi: ViewerApi = {
    getViewer: async () => {
        const response = await createRequest<GetViewerOrdersResponse>({
            url: 'main/orders',
            method: 'GET',
        })

        return {
            error: false,
            payload: {
                avatar: getInitDataUnsafe().user.photo_url,
                name: `${getInitDataUnsafe().user.last_name} ${getInitDataUnsafe().user.first_name}`,
                username: getInitDataUnsafe().user.username,
                orders: response.payload
                    ? response.payload.result.orders.map(item => ({
                        id: item.id,
                        name: item.package_name,
                        price: item.major_price,
                        paymentType: PaymentType.MAJOR,
                    }))
                    : []
            }
        }
    }
}