/*
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-08-21 11:36:21
 * @LastEditors: kakachake
 * @LastEditTime: 2019-09-14 10:43:55
 */
import {AxiosRequestConfig, AxiosPromise, AxiosResponse} from './types'

import { parseHeaders } from '../helpers/headers'

import { createError } from '../helpers/error'

import { transformResponse } from '../helpers/data'

export default function xhr(config: AxiosRequestConfig): AxiosPromise {
    return new Promise((resolve, reject)=>{  //返回一个promise
        const  { data = null, url, method = 'get', 
        headers, responseType, timeout } = config //结构获取参数
    
        const request = new XMLHttpRequest() //创建xml对象
        
        

        if(responseType) {
            request.responseType = responseType; //添加resoponseType属性
        }

        if(timeout) {
            request.timeout = timeout //添加timeout属性
        }

        request.open(method.toUpperCase(), url, true)   


        //当状态发生改变
        request.onreadystatechange = function handleLoad() {
            if(request.readyState !== 4){
                return;
            }
            
            
            
            if(request.status === 0) {
                return
            } 
            
            //当请求已完成，且响应已就绪时执行以下
            
            const responseHeaders = request.getAllResponseHeaders() //获取返回头
            const responseData = responseType !== 'text'? request.response: //获取返回数据，先判断返回类型
            request.responseText
            const response:AxiosResponse = {
                data: transformResponse(responseData),
                status: request.status,
                statusText: request.statusText,
                headers: parseHeaders(responseHeaders), 
                config,
                request
            }
            handleResponse(response) //判断是否出现相应错误
        }


        //当报错
        request.onerror = function handleError() {
            reject(createError('Network Error',
                config,
                null,
                request
            ))
        }


        //当超时
        request.ontimeout = function handleTimeout(){
            reject(createError(`Timeout of ${timeout} ms exceeded`,
                config,
                'ECONNABORTED',
                request
            ))
        }
    
        Object.keys(headers).forEach((name)=>{
            if(data === null && name.toLowerCase() === 'content-type'){
                delete headers[name]
            }else{
                request.setRequestHeader(name, headers[name]);
            }
        })
    
        request.send(data)

        function handleResponse(response:AxiosResponse): void{
            if(response.status >= 200 && response.status < 300) {
                resolve(response)
            }else{
                reject(createError(`Request failed with status code ${response.status}`,
                    config,
                    null,
                    request,
                    response
                ))
            }
        }

    })

}