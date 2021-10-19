const Sequelize = require('sequelize')
const sequelize = require('../database/database.js');

const usuario = sequelize.define("usuario", {
    id_usuario: {
        allowNull: false,
        primarykey: true,
        type: Sequelize.INTEGER,
    },
    nome: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate:{
            len:[3,100]
        }

    },
    email:{
        allowNull: false,
        type: Sequelize.STRING(100),
    },
    dataNascimento :{
        allowNull: false,
        type: Sequelize.DATE(),
    },
    sexo:{
        allowNull: false,
        type: Sequelize.STRING(1),
    },
    altura :{
        allowNull: false,
        type: Sequelize.DOUBLE,
        validate:{
            len:[2,99999]
        }

    },
    peso :{
        allowNull: false,
        type: Sequelize.DOUBLE,
        validate:{
            len:[2,99999]
        }

    },
    senha: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate:{
            len:[3,100]
      }
      },
    
    
    
})