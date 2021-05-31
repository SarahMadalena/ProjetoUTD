module.exports = (sequelize, Sequelize) => {
	const Cliente = sequelize.define('cliente', {	
	  id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
    },
	  nome: {
			type: Sequelize.STRING
	  },
	  email: {
			type: Sequelize.STRING
	  },
	  idade: {
			type: Sequelize.INTEGER
    },
	});
	
	return Cliente;
}