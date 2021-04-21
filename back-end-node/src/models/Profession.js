const { Model, DataTypes } = require('sequelize');

class Profession extends Model {

    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            status: DataTypes.BOOLEAN,
        }, {
            sequelize
        })
    }

}

module.exports = Profession;