/*
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-08-21 12:04:58
 * @LastEditors: kakachake
 * @LastEditTime: 2019-09-14 17:36:05
 */
import axios from '../../src/index'

interface ResponseData<T = any> {
  code: number,
  result: T,
  message: string
}

interface User{
  name: string,
  age: number
}

function getUser<T>() {
  return axios<ResponseData<T>>('/extend/user')
    .then(res=> res.data)
    .catch(err => console.error(err))
}

async function test(){
  const user = await getUser<User>()
  if(user) {
    console.log(user.result.name);
  }
}

test()

axios({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2
  }
}).then((res)=>{
  console.log(res);
})

axios('/simple/get',{
  method: 'get',
  params: {
    type: '重载'
  }
}).then((res)=>{
  console.log(res);
})


axios.request({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2
  }
})


axios.get('/extend/get',{
  params: 'hi server'
})

axios.post('/extend/post',{
  msg:'hello, server'
},{
  params:{
    msg:'hi server'
  }
})

