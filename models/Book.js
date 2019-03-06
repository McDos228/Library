module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    link: DataTypes.STRING,
    ganres: DataTypes.STRING,
    art: DataTypes.STRING,
    pages: DataTypes.INTEGER
  }, { timestamps: false });
  Book.associate = function(models) {
    // associations can be defined here
  };
  return Book;
};