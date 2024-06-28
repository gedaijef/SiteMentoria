module.exports = (sequelize, DataTypes) => {
    const Serie = sequelize.define('Serie', {
      ano: {
        type: DataTypes.STRING,
        allowNull: false
      },
      turma: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return Serie;
  };
  