const db = require('./db');
const helper = require('../helper');

async function getAllUsers(id){
    const rows = await db.query(
      `SELECT ID_usuario, nomusua, rol FROM grupo11.usuario WHERE ID_usuario != ${id};`
    );
    const data = helper.emptyOrRows(rows);
  
    return data;
}

module.exports = {
  getAllUsers
}