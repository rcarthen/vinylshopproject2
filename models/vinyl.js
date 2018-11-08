///module.exports to create my vinyly-product table
module.exports = function(sequelize, DataTypes) {
  const vinyl = sequelize.define('vinyl', {
    vinyl_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    artist: {
      type: DataTypes.STRING,
      allowNull:false
    },

    genre: {
      type: DataTypes.STRING,
      allowNull:false
    },
    price: {
      type: DataTypes.INTEGER,
    
    },
    quantity: {
      type: DataTypes.INTEGER,
    },

    image: {
    type: DataTypes.STRING,
    },
  

  info: {
    type: DataTypes.STRING,
    }
  });


  return vinyl;
}
