const sequelize = require('../mysql/mysqlConnect');
const {DataTypes, Model} = require('sequelize');

class manageUser extends Model {
}

manageUser.init({
    // 在这里定义模型属性
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true
    },
    insideUsername: {
        type: DataTypes.STRING,
        field: 'inside_username'
    },
    addTime: {
        type: DataTypes.DATE,
        field: 'add_time'
    },
    trueName: {
        type: DataTypes.STRING,
        field: 'true_name'
    },
    password: {
        type: DataTypes.STRING
    }

}, {
    sequelize, // 数据库连接实例
    tableName: 't_manage_user',
    timestamps: false
});


module.exports = manageUser;