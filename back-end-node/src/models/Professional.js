const { Model, DataTypes } = require('sequelize');

class Professional extends Model {

    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            phone: DataTypes.STRING,
            status: DataTypes.BOOLEAN,
            profession_id: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }    
    
    static associate(models) {
        this.belongsTo(models.Profession, { foreignKey: 'profession_id'});
    }
}

module.exports = Professional;
