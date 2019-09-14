import { isObject } from "util";
import { isPlainObject } from "./utils";

/*
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-09-09 21:46:24
 * @LastEditors: kakachake
 * @LastEditTime: 2019-09-10 20:58:01
 */


export function transformRequest (data: any): any {
    
    if(isPlainObject(data)) {
        return JSON.stringify(data)
    }
    return data;
}


export function transformResponse(data: any): any {
    if(typeof data == "string"){
        try {
            data = JSON.parse(data) //转换为json对象
        } catch {
            //do nothing 
        }
    }
    return data; //转换失败就返回原字符串
}