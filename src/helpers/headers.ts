/*
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-09-09 22:28:10
 * @LastEditors: kakachake
 * @LastEditTime: 2019-09-10 20:48:35
 */

 import { isPlainObject } from './utils'



 //规范headers键名
 function normalizeHeaderName (headers: any, normalizeHeaderName: string):  void {
    if(!headers){
        return
    }

    Object.keys(headers).forEach((name)=>{
        if(name !== normalizeHeaderName && name.toUpperCase() === 
        normalizeHeaderName.toUpperCase()) {
            headers[normalizeHeaderName] = headers[name];
            delete headers[name]
        }
    })
 }


export function processHeaders (headers: any, data: any): any{
    normalizeHeaderName(headers, 'Content-Type') //规范header, 方便下面对比


    if(isPlainObject(data)){
        if(headers && !headers['Content-Type']){
            headers['Content-Type'] = 'application/json;charset=utf-8'
        } 
    }

    return headers;
}


//解析headers字符串
export function parseHeaders(headers: string): any{
    let parsed = Object.create(null)
    if(!headers){
        return parsed;
    }

    headers.split('\r\n').forEach((line)=>{
        let [ key, val ] = line.split(":") //解构赋值
        key = key.trim().toLowerCase()
        if(!key) {
            return
        }
        if(val) {
            val = val.trim()
        }
        parsed[key] = val
    })

    return parsed;
}