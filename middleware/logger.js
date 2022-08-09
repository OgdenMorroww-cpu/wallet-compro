const moment = require("moment");

const logger = (reg, res, next) => {
  console.log(
    `${reg.protocol}://${reg.get("host")}${
      reg.originalUrl
    }: ${moment().format()}`
  );
  next();
};

module.exports = logger;
