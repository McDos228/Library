module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    username: {
      type : DataTypes.STRING,
     
    },
    password: DataTypes.STRING,
    email: {
      unique : true,
      type: DataTypes.STRING
    },
    role : DataTypes.STRING
  }, { timestamps: false });
  User.associate = (models)=> {
  };
  return User;
};