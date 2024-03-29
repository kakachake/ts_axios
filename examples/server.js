/*
 * @Description: q
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-08-21 11:59:15
 * @LastEditors: kakachake
 * @LastEditTime: 2019-09-14 17:39:34
 */
const express = require('express')
const bodyParser = require('body-parser')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const WebpackConfig = require('./webpack.config')
const router = express.Router()
const app = express()
const compiler = webpack(WebpackConfig)

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/dist/',
  stats: {
    colors: true,
    chunks: false
  }
}))

app.use(webpackHotMiddleware(compiler))

app.use(express.static(__dirname))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

router.get('/simple/get', function(req, res) {
  res.json({
    msg: `hello world`
  })
})

router.get('/base/get', function(req, res) {
  res.json(req.query)
})

router.post('/base/post', function(req, res) {
  res.json(req.body)
})

router.post('/base/buffer', function(req, res){
  let msg = []
  req.on ('data', (chunk)=>{
    if(chunk) {
      msg.push(chunk)
    }
  })
  req.on('end', ()=>{
    let buf = Buffer.concat(msg)
    res.json(buf.toJSON())
  })
})

router.get('/error/get', function(req, res) {
  if(Math.random() > 0.5){
    res.json({
      msg: `hello world`
    })
  }else{
    res.status(500)
    res.end()
  }
})

router.get('/error/timeout', function(res, res) {
  setTimeout(()=>{
    res.json({
      msg:'hello world'
    })
  }, 3000)
})

router.get('/extend/get', function(req, res) {
  res.json({
    msg: 'hello world'
  })
})

router.post('/extend/post', function(req, res) {
  res.json({
    msg: 'hello world'
  })
})

router.get('/extend/user', function(req, res) {
  res.json({
    code: 0,
    message: 'ok',
    result: {
      age: 18,
      name:'张三'
    }
  })
})

app.use('', router)

const port = process.env.PORT || 8080
module.exports = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`)
})