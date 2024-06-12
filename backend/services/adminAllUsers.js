const db = require('./db');
const helper = require('../helper');

async function getAllUsers(id){
    const rows = await db.query(
      `SELECT ID_usuario, nomusua, Contraseña, rol FROM grupo11.usuario WHERE ID_usuario != ${id};`
    );
    const data = helper.emptyOrRows(rows);
  
    return data;
}

async function create(usuario){
  const result = await db.query(
    `INSERT INTO usuario (nomusua, Contraseña, rol) VALUES ('${usuario.username}','${usuario.password}',${usuario.role});`
  );

  let message = 'Error al crear usuario';

  if(result.affectedRows) {
    message = 'Usuario creado con exito';
  }

  return message;
}

async function update(id, usuario){
  const result = await db.query(
    `UPDATE grupo11.usuario SET nomusua = '${usuario.username}', Contraseña = '${usuario.password}', rol = ${usuario.role} WHERE ID_usuario = ${id};`
  );

  let message = 'Error al crear usuario';

  if(result.affectedRows) {
    message = 'Usuario creado con exito';
  }

  return message;
}

async function remove(id){
  const result = await db.query(
    `DELETE FROM grupo11.usuario WHERE ID_usuario = ${id};`
  );

  let message = 'Error al crear usuario';

  if(result.affectedRows) {
    message = 'Usuario creado con exito';
  }

  return message;
}

module.exports = {
  getAllUsers,
  create,
  update,
  remove
}