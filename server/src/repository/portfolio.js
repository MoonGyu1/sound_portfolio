const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const savePortfolio = async (conn, params) => {
  // await conn.query('INSERT INTO `sound_porfolio` (user_id, title, music_type, music_link, music_start_m, music_start_s, intro, artist_name, music_video_link, category, tag) VALUES (?, ?, ?, ?);', [
  //   kakaoUid,
  //   properties.nickname,
  //   !!kakaoAccount && !!kakaoAccount.birthday ? kakaoAccount.birthday : null,
  //   !!kakaoAccount && !!kakaoAccount.gender ? kakaoAccount.gender : null,
  // ])

  return convertSnakeToCamel.keysToCamel(row[0]);
};

const getPortfolio = async (conn) => {
  const [row] = await conn.query('SELECT * FROM `sound_portfolio`;');
  return convertSnakeToCamel.keysToCamel(row);
};

// const getUserByUserId = async (conn, userId) => {
//   const [row] = await conn.query('SELECT * FROM `user` WHERE id = ?;', [userId]);

//   return convertSnakeToCamel.keysToCamel(row[0]);
// };

module.exports = {
  savePortfolio,
  getPortfolio,
};
