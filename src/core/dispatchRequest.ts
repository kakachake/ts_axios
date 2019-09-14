/*
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-09-10 23:07:19
 * @LastEditors: kakachake
 * @LastEditTime: 2019-09-14 10:44:07
 */

import {AxiosRequestConfig, AxiosPromise} from './types';
import xhr from './xhr'
import { buildURL } from '../helpers/url'
import { transformRequest } from '../helpers/data'
import { processHeaders } from '../helpers/headers'

export default function dispatchRequest(config: AxiosRequestConfig): AxiosPromise{
   //TODO
   processConfig(config)
   return xhr(config)
}

function processConfig(config: AxiosRequestConfig): void{ //对传入的参数进行transform
   config.url = transformURL(config) 
   config.headers = transformHeaders(config)
   config.data = transformRequestData(config)
}

function transformURL(config: AxiosRequestConfig):string {
   const { url, params } = config
   return buildURL(url, params) //拼接url与params参数
}

function transformRequestData (config: AxiosRequestConfig): any{
   return transformRequest(config.data) //将对象或数组转换为json字符串
}

function transformHeaders(config: AxiosRequestConfig): any{
   const { headers = {}, data } = config;
   return processHeaders(headers, data); 
}

// export default axios;