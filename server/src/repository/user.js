const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getUserById = async (conn, serviceId, password) => {
  const [row] = await conn.query('SELECT * FROM `user` WHERE service_id = ? AND password = ?;', [serviceId, password]);

  return convertSnakeToCamel.keysToCamel(row[0]);
};

module.exports = {
  getUserById,
};
