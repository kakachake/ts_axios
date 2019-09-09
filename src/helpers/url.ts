/*
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-09-09 19:18:15
 * @LastEditors: kakachake
 * @LastEditTime: 2019-09-09 20:38:28
 */

 import { isDate, isObject } from './utils'
 import { JsonFormatter } from '_tslint@5.19.0@tslint/lib/formatters';

 function encode(val: string): string {
    
    return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/ig, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/ig, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/ig, '[')
    .replace(/%5D/ig, ']')
    
 }

export function buildURL(url: string, params?: any): string {
    if(!params){
        return url;
    }

    const parts: string[] = [];

    Object.keys(params).forEach((key)=>{
        var val = params[key]
        if(val === null || typeof val === 'undefined') {
            return
        }

        let values = [] 
        if(Array.isArray(val)){
            values = val;
            key += '[]'
        }else{
            values = [val];
        }

        values.forEach((val)=>{
            if(isDate(val)){
                val = val.toISOString()
            }else if(isObject(val)){
                val = JSON.stringify(val)
            }
            parts.push(`${encode(key)}=${encode(val)}`)
        })
    })

    let serializedParams = parts.join('&')

    if(serializedParams){
        const markIndex = url.indexOf('#')
        if(markIndex != -1){
            url = url.slice(0, markIndex)
        }
        url += (url.indexOf('?') === -1 ? '?' : '&') 
        + serializedParams
    }

    return url;
}