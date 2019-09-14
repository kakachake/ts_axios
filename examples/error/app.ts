/*
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-08-21 12:04:58
 * @LastEditors: kakachake
 * @LastEditTime: 2019-09-10 23:14:27
 */
import axios, { AxiosError } from '../../src/index'

axios({
  method: 'get',
  url: '/error/get',
  params: {
    a: 1,
    b: 2
  }
}).then((res)=>{
  console.log(res);
  
})

axios({
  method: 'get',
  url: '/error/timeout',
  params: {
    a: 1,
    b: 2
  },
  timeout: 2000
}).catch((e: AxiosError)=>{
  console.log(e.message)
  console.log(e.config);
  console.log(e.code);
  console.log(e.request);
  console.log(e.isAxiosError);
  
})