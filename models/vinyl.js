module.exports = function(sequelize, DataTypes) {
  const Vinyl = sequelize.define('Vinyl', {
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
    }
  });

  return Vinyl;
}
