const pool = require('../../repository/db');
const { userDB, portfolioDB } = require('../../repository');
const util = require('../../lib/util');
const statusCode = require('../../constants/statusCode');
const responseMessage = require('../../constants/responseMessage');

// 사운드 포트폴리오 업로드
module.exports = async (req, res) => {
  const params = req.body;

  if (!userId) {
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  let conn;
  try {
    conn = await pool.getConnection();

    const user = await userDB.getUserById(conn, userId);

    // 유저가 없는 경우
    if (!user) {
      return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, responseMessage.NO_USER));
    }
    await portfolioDcB.savePorfolio(conn, params);

    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.GET_USER_SUCCESS, user));
  } catch (error) {
    return res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
  } finally {
    conn.release();
  }
};
