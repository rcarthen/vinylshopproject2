module.exports = function(sequelize, DataTypes) {
    const cart = sequelize.define('cart', {
      product: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.INTEGER,
      
      },
      quantity: {
        type: DataTypes.INTEGER,
      }
    });
  
    return cart;
  }
  