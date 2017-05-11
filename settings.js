var env = process.env.NODE_ENV || 'development';
var isProduction = env == "production";
var PORT=process.env.PORT || 8080;
var MYSQL_URL=process.env.MYSQL_URL || '';
var MYSQL_USER=process.env.MYSQL_USER || 'admin';
var MYSQL_PWD=process.env.MYSQL_PWD || '';

module.exports = {
    env: env,
    isProduction: isProduction,
    port: PORT,
    mysql_user: MYSQL_USER,
    mysql_pwd: MYSQL_PWD,
    mysql_url: MYSQL_URL
}
