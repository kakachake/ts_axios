import { AxiosResponse, AxiosRequestConfig } from "../types"

/*
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-09-10 21:46:27
 * @LastEditors: kakachake
 * @LastEditTime: 2019-09-10 21:58:01
 */



export class AxiosError extends Error{
    isAxiosError: boolean
    config :AxiosRequestConfig
    code?: string | null
    request? : any
    response? :AxiosResponse

    constructor(
        message: string,
        config: AxiosRequestConfig,
        code?: string | null,
        request? : any,
        response?: AxiosResponse
    ){
        super(message)

        this.config = config
        this.code = code
        this.request = request
        this.response = response
        this.isAxiosError = true

        Object.setPrototypeOf(this, AxiosError.prototype)
    }
}

export function createError(
    message: string,
    config: AxiosRequestConfig,
    code?: string | null,
    request? : any,
    response?: AxiosResponse
){
    const error = new AxiosError(message, config, code ,request, response)
    return error
}