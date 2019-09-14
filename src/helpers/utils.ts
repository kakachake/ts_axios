/*
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-09-09 19:34:21
 * @LastEditors: kakachake
 * @LastEditTime: 2019-09-14 11:27:14
 */

 const toString = Object.prototype.toString;

export function isDate(val: any): val is Date { //判断是否为date
    return toString.call(val) == '[Object Date]' 
}

export function isObject(val: any): val is Object {
    return val !== null && typeof val === 'object';
}


export function isPlainObject (val: any): val is Object { //判断是否为原生object对象
    return toString.call(val) === '[object Object]'
}

export function extend<T, U>(to:T, from:U): T & U {
    for(const key in from) {
        ;(to as T&U)[key] = from[key] as any
    }
    return to as T&U
}