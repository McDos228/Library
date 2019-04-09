module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      allowNull : false,
      type : DataTypes.STRING
    },
    author: DataTypes.STRING,
    link: {
      allowNull : false,
      type : DataTypes.STRING
    },
    ganres: DataTypes.STRING,
    art: DataTypes.STRING,
    pages: DataTypes.INTEGER,
    desc : DataTypes.STRING
  }, { timestamps: false });
  Book.associate = ({Favorite})=> {
    Book.hasOne(Favorite, {foreignKey: 'id'})
  };
  return Book;
};