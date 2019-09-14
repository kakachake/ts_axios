/*
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-08-21 11:26:18
 * @LastEditors: kakachake
 * @LastEditTime: 2019-09-14 17:30:18
 */

export type Method = 'get' | 'GET' 
| 'delete' | 'DELETE' 
| 'head' | 'HEAD' 
| 'options' | 'OPTIONS' 
| 'post' | 'POST' 
| 'put' | 'PUT'
| 'patch' | 'PATCH'

export interface AxiosRequestConfig {
    url?: string
    method?: Method
    data?: any
    params?: any
    headers?: any
    responseType?: XMLHttpRequestResponseType
    timeout? : number
}

export interface AxiosResponse<T = any> {
    data: T
    status: number
    statusText: string
    headers: any 
    config: AxiosRequestConfig
    request: any
}

export interface AxiosPromise<T=any> extends Promise<AxiosResponse<T>> {
    
}

export interface AxiosError extends Error {
    isAxiosError: boolean
    config: AxiosRequestConfig
    code? : string | null
    request? : any
    response? : AxiosResponse
}

export interface Axios {
    request(config: AxiosRequestConfig): AxiosPromise

    get(url: string, config?: AxiosRequestConfig): AxiosPromise

    delete(url: string, config?: AxiosRequestConfig): AxiosPromise
    
    head(url: string, config?: AxiosRequestConfig): AxiosPromise

    options(url: string, config?: AxiosRequestConfig): AxiosPromise

    post(url: string, data?:any, config?: AxiosRequestConfig): AxiosPromise

    patch(url: string, data?:any, config?: AxiosRequestConfig): AxiosPromise
}

export interface AxiosInstance extends Axios {
    <T = any>(config: AxiosRequestConfig): AxiosPromise<T>

    <T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
}