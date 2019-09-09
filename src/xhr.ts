/*
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-08-21 11:36:21
 * @LastEditors: kakachake
 * @LastEditTime: 2019-08-21 11:39:36
 */
import {AxiosRequestConfig} from './types'
export default function xhr(config: AxiosRequestConfig): void {
    const  { data = null, url, method = 'get'} = config

    const request = new XMLHttpRequest()

    request.open(method.toUpperCase(), url, true)

    request.send(data)
}