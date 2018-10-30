module.exports = function(sequelize, DataTypes) {
  const products = sequelize.define('vinyl', {
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    department_name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    price: {
      type: DataTypes.INTEGER,
    
    },
    stock_quanity: {
      type: DataTypes.INTEGER,
    }
  });

  return products;
}
