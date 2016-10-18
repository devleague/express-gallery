module.exports = function(sequelize, DataTypes) {
  var Photo = sequelize.define("Photo", {
    description: DataTypes.TEXT,
    author: DataTypes.STRING,
    link: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Photo.belongsTo(models.User);
      }
    }
  });

  return Photo;
};