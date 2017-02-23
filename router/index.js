const Router = require('koa-router');
const router = new Router()
import modelCtr from '../constroller/api'
router
  .get('/list', modelCtr.getList)
  .get('/create', modelCtr.createList);

export default router