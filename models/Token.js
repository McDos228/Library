module.exports = (sequelize, DataTypes) => {
  const Token = sequelize.define('Token', {
    token: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, { timestamps: false });
  Token.associate = function(models) {
    // associations can be defined here
  };
  return Token;
};