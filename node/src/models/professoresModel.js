module.exports = (sequelize, DataTypes) => {
    const Professor = sequelize.define('Professor', {
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    Professor.associate = (models) => {
      Professor.belongsTo(models.Disciplina, {
        foreignKey: 'disciplina_id'
      });
    };
  
    return Professor;
  };
  