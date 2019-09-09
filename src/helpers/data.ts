import { isObject } from "util";
import { isPlainObject } from "./utils";

/*
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-09-09 21:46:24
 * @LastEditors: kakachake
 * @LastEditTime: 2019-09-09 21:52:14
 */


export function transformRequest (data: any): any {
    if(isPlainObject(data)) {
        return JSON.stringify(data)
    }
    return data;
}
