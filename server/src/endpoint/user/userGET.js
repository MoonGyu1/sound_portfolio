const pool = require('../../repository/db');
const { userDB } = require('../../repository');
const util = require('../../lib/util');
const statusCode = require('../../constants/statusCode');
const responseMessage = require('../../constants/responseMessage');

// 아티스트 모두 가져오기
module.exports = async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();

    let user = await userDB.getUser(conn);

    if (!user) {
      return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, responseMessage.NO_USER));
    }

    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.GET_USER_SUCCESS, user));
  } catch (error) {
    return res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
  } finally {
    conn.release();
  }
};
