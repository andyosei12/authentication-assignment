const { getUsers } = require('../db/user');

const findUser = async (key, value) => {
  const users = await getUsers();
  const existingUser = users.find((user) => user[key] === value);
  return existingUser;
};

const checkAuth = async (req, res, next) => {
  const apiKey = req.headers.api_key;
  if (!apiKey) {
    return res.status(401).json({
      data: null,
      error: 'Api key missen',
    });
  }

  //   check if api key exists in db;
  const user = await findUser('apiKey', apiKey);
  if (!user) {
    return res.status(404).json({
      data: null,
      error: 'Invalid api key',
    });
  }
  req.user = user;
  next();
};

const checkUsername = async (req, res, next) => {
  const user = await findUser('username', req.body.username);
  if (user) {
    return res.status(400).json({
      data: null,
      error: 'Username already exists.',
    });
  }
  next();
};

const checkIsNormalUser = async (req, res, next) => {
  const user = req.user;
  if (user.role !== 'user') {
    return res.status(403).json({
      data: null,
      error: 'Unauthorized access',
    });
  }
  next();
};

const checkIsAdmin = async (req, res, next) => {
  const user = req.user;
  if (user.role !== 'admin') {
    return res.status(403).json({
      data: null,
      error: 'Unauthorized access',
    });
  }
  next();
};

module.exports = {
  checkUsername,
  checkAuth,
  checkIsNormalUser,
  checkIsAdmin,
};
