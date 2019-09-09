/*
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-08-21 11:26:18
 * @LastEditors: kakachake
 * @LastEditTime: 2019-08-21 11:34:14
 */

export type Method = 'get' | 'GET' 
| 'delete' | 'DELETE' 
| 'head' | 'HEAD' 
| 'options' | 'OPTIONS' 
| 'post' | 'POST' 
| 'put' | 'PUT'
| 'patch' | 'PATCH'

export interface AxiosRequestConfig {
    url: string
    method?: Method
    data?: any
    params?: any
}