const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getUserById = async (conn, serviceId, password) => {
  const [row] = await conn.query('SELECT * FROM `user` WHERE service_id = ? AND service_password = ?;', [
    serviceId,
    password,
  ]);

  return convertSnakeToCamel.keysToCamel(row[0]);
};

const getUserByUserId = async (conn, userId) => {
  const [row] = await conn.query('SELECT * FROM `user` WHERE id = ?;', [userId]);

  return convertSnakeToCamel.keysToCamel(row[0]);
};

const getUser = async (conn) => {
  const [row] = await conn.query('SELECT * FROM `user`;');

  return convertSnakeToCamel.keysToCamel(row);
};

module.exports = {
  getUserById,
  getUserByUserId,
  getUser,
};
