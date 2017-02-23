const base = require('../model/index')
const modelCtr = {
  getList : async function (ctx, next) {
    console.log(this)
    let name =  ctx.query.name;
    let req = await base.getName(name);
    ctx.status = 200;
    ctx.body = req;
  },
  createList : async function (ctx, next) {
    
    let name =  ctx.query.name;
    let req = await base.createName(name, new Date());
    ctx.status = 200;
    ctx.body = req;
  },
  
}

export default modelCtr;