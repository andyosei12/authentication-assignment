const { getUsers } = require('../db/user');

const checkUsername = async (req, res, next) => {
  const users = await getUsers();
  const isExistingUser = users.find(
    (user) => user.username === req.body.username
  );
  console.log(isExistingUser);
  if (isExistingUser) {
    return res.status(400).json({
      data: null,
      error: 'Username already exists.',
    });
  }
  next();
};

module.exports = {
  checkUsername,
};
