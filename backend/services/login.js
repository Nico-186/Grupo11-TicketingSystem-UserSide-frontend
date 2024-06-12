const db = require('./db');
const helper = require('../helper');

async function getLoginUsrData(username,password){
    const rows = await db.query(
      `SELECT ID_usuario, nomusua, rol FROM grupo11.usuario WHERE nomusua='${username}' AND Contraseña='${password}';`
    );
    const data = helper.emptyOrRows(rows);
  
    return data;
}

module.exports = {
    getLoginUsrData
}