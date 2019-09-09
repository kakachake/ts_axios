/*
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-08-21 11:10:38
 * @LastEditors: kakachake
 * @LastEditTime: 2019-09-09 20:14:12
 */

 import {AxiosRequestConfig} from './types';
 import xhr from './xhr'
 import { buildURL } from './helpers/url'
 
function axios (config: AxiosRequestConfig) {
    //TODO
    processConfig(config)
    xhr(config)
}

function processConfig(config: AxiosRequestConfig): void{
    config.url = transformURL(config)
}

function transformURL(config: AxiosRequestConfig):string {
    const { url, params } = config
    return buildURL(url, params)
}

export default axios;