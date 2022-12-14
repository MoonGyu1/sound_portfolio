const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const printer = require('./lib/printer');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const urlConfig = require('./config/urlConfig');
const fileUpload = require('express-fileupload');

async function createApp(config) {
  const app = express();

  app.use(fileUpload());
  app.use(bodyParser.json()); // for parsing application/json
  app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
  // app.use(upload.array()); // for parsing multipart/form-data

  app.use(cookieParser(process.env.COOKIE_SECRET, { signed: true })); // 쿠키 암호화

  if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
  } else {
    app.use(morgan('combined'));
  }

  // Cookie 사용을 위한 cors option 설정
  app.use(
    cors({
      origin: urlConfig.clientUrl,
      credentials: true,
    }),
  );

  app.use(express.json());

  app.use('/api', require('./endpoint'));

  app.use('*', (req, res) => {
    res.status(404).json({ message: '올바르지 않은 경로입니다.' });
  });
  app.use(defaultErrorHandler());

  function start() {
    printer.info('#######################################');
    printer.info('       Sound Portfolio Server      ');
    printer.info('#######################################');

    app
      .listen(config.port, () => {
        printer.info(`서버를 시작했습니다. [${config.baseURL}]`);
      })
      .on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
          printer.error(`서버 시작에 실패했습니다. ${config.port}번 포트를 다른 프로그램이 사용중입니다.`);
        } else {
          printer.error(err);
        }
      });
  }

  return {
    start,
  };
}

function defaultErrorHandler() {
  return (err, req, res, next) => {
    res.status(500).json({ message: err.toString() });
    throw err;
  };
}

module.exports = { createApp };
