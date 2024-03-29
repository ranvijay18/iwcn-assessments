const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Notes = sequelize.define('note',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    note: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

module.exports = Notes;