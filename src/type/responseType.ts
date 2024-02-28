import {AxiosResponse} from "axios";

export type IRes<T> = Promise<AxiosResponse<T>>
export type IResImg = Promise<AxiosResponse>
export type IResId<T> = Promise<AxiosResponse<T>>
