/*
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-09-10 23:07:19
 * @LastEditors: kakachake
 * @LastEditTime: 2019-09-14 16:11:38
 */

import { AxiosInstance } from './types'
import Axios from './core/Axios'
import { extend } from './helpers/utils'

function createInstance(): AxiosInstance {
    const context = new Axios()
    
    const instance = Axios.prototype.request.bind(context)//混合对象

    extend(instance, context)

    return instance as AxiosInstance;
}

const axios = createInstance()

export default axios;