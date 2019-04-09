module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        unique : true,
        type: Sequelize.STRING
      },
      role:{
        allowNull: false,
        type : Sequelize.STRING
      }
    }, {timestemps : false});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};