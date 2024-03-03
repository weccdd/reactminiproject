import {AxiosResponse} from "axios";

export type IRes<T> = Promise<AxiosResponse<T>>
export type IResId<T> = Promise<AxiosResponse<T>>

