module.exports = (sequelize, DataTypes) => {
  const Token = sequelize.define('Token', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    token: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, { timestamps: false });
  Token.associate = function(models) {
    // associations can be defined here
  };
  return Token;
};