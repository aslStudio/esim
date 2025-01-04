import {ResponseDefault} from "@/shared/lib/api/createRequest.ts";

export type GetViewerResponse = {
    avatar?: string
    name: string
    username: string
}

export type ViewerApi = {
    getViewer: () =>
        Promise<ResponseDefault<GetViewerResponse>>
}