module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER
  }, {timestamps : false});
  Favorite.associate = ({Book})=> {
    Favorite.belongsTo(Book, {foreignKey: 'bookId'})
  };
  return Favorite;
};