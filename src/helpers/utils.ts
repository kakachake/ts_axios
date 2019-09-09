/*
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-09-09 19:34:21
 * @LastEditors: kakachake
 * @LastEditTime: 2019-09-09 21:51:40
 */

 const toString = Object.prototype.toString;

export function isDate(val: any): val is Date {
    return toString.call(val) == '[Object Date]'
}

export function isObject(val: any): val is Object {
    return val !== null && typeof val === 'object';
}


export function isPlainObject (val: any): val is Object {
    return toString.call(val) === '[object, Object]'
}