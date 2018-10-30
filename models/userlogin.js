module.exports = function(sequelize, DataTypes) {
    const products = sequelize.define('userlogin', {
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
  
    return products;
  }