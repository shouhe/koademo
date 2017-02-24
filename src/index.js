var Koa = require('koa');
var app = new Koa();
var logger = require('koa-logger')
var log4js = require('log4js'); 
import router from '../router'
app.use(logger())
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);