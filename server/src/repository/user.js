const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getUserById = async (conn, userId) => {
  const [row] = await conn.query(
    'SELECT * FROM `user` WHERE id = (?);',
    [userId],
  );

  return convertSnakeToCamel.keysToCamel(row[0]);
};

module.exports = {
  getUserById,
};
