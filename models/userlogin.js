module.exports = function(sequelize, DataTypes) {
    const userlogin = sequelize.define('userlogin', {
      firstname: {
        type: DataTypes.STRING,
        allowNull: false
      },

      lastname: {
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
     
    },{timestamps:false});
  
    return userlogin;
  }