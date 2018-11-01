module.exports = function(sequelize, DataTypes) {
    const userlogin = sequelize.define('userlogin', {
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull:false
      },
      password: {
        type: DataTypes.STRING,
      
      }
     
    });
  
    return userlogin;
  }