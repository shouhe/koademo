const Sequelize = require('sequelize');
let sequelize = new Sequelize('blog', 'root', 'admin');
export default class  User {
  
} 


const User =  sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});
export default User;