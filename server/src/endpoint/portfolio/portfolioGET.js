const pool = require('../../repository/db');
const { portfolioDB } = require('../../repository');
const util = require('../../lib/util');
const statusCode = require('../../constants/statusCode');
const responseMessage = require('../../constants/responseMessage');
const { toArrayOfString, toArrayOfNumber } = require('../../lib/convertArrayToString');

// 사운드 포트폴리오 가져오기
module.exports = async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();

    let portfolio = await portfolioDB.getPortfolio(conn);

    if (!portfolio) {
      return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, responseMessage.NO_USER));
    }

    portfolio = portfolio.map((p) => {
      let n = {};
      const numberCheckList = ['category'];
      const stringCheckList = ['tag'];

      for (const [k, v] of Object.entries(p)) {
        if (numberCheckList.includes(k)) {
          n[k] = toArrayOfNumber(v);
        } else if (stringCheckList.includes(k)) {
          n[k] = toArrayOfString(v);
        } else {
          n[k] = v;
        }
      }
      return n;
    });

    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.GET_USER_SUCCESS, portfolio));
  } catch (error) {
    return res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
  } finally {
    conn.release();
  }
};
