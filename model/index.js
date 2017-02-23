const Sequelize = require('sequelize');
let sequelize = new Sequelize('blog', 'root', 'admin');

let User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

let getName = async function(name){
  let user = await User.findOne({
    where: {
      username: name
    },
    raw: true
    });
  return user;
}

let createName = async function(name,birthday){
  let user = await User.create({
    username: name,
    birthday: birthday
  });
  return {msg:'success'};
}
let base ={
  getName,
  createName
}
module.exports = base