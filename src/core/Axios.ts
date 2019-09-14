/*
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-09-14 10:39:29
 * @LastEditors: kakachake
 * @LastEditTime: 2019-09-14 17:23:10
 */
import { AxiosRequestConfig, AxiosPromise, Method } from "../types";
import dispatchRequest from './dispatchRequest'

export default class Axios {
    request<T = any>(url: any, config?: any): AxiosPromise<T>{
        if(typeof url === 'string'){
            if(!config) {
                config = {}
            }
            config.url = url
        } else {
            config = url
        }
        return dispatchRequest(config)
    }
    

    get<T = any>(url:string, config?:AxiosRequestConfig): AxiosPromise{
        return this._requestMethodWithoutData(url, 'get', config)
    }

    delete<T = any>(url:string, config?:AxiosRequestConfig): AxiosPromise{
        return this._requestMethodWithoutData(url, 'delete', config)
    }

    head<T = any>(url:string, config?:AxiosRequestConfig): AxiosPromise{
        return this._requestMethodWithoutData(url, 'delete', config)
    }

    options<T = any>(url:string, config?:AxiosRequestConfig): AxiosPromise{
        return this._requestMethodWithoutData(url, 'delete', config)
    }

    post<T = any>(url:string, data?:any,config?:AxiosRequestConfig): AxiosPromise{
        return this._requestMethodWithData(url, 'post', data, config)
    }

    put<T = any>(url:string, data?:any,config?:AxiosRequestConfig): AxiosPromise{
        return this._requestMethodWithData(url, 'post', data, config)
    }

    patch<T = any>(url:string, data?:any,config?:AxiosRequestConfig): AxiosPromise{
        return this._requestMethodWithData(url, 'post', data, config)
    }


    _requestMethodWithoutData(url: string, method: Method,  config?: AxiosRequestConfig) {
        return this.request(Object.assign(config||{},{
            method,
            url
        }))
    }

    _requestMethodWithData(url: string, method: Method, data?:any, config?: AxiosRequestConfig) {
        return this.request(Object.assign(config||{},{
            method,
            url,
            data
        }))
    }
}