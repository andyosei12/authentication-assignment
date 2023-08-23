const { addUser, getUsers } = require('../db/user');

const createUser = async (req, res) => {
  const user = await addUser(req.body);
  res.status(201).json({
    data: {
      message: 'User created successfully',
      user,
    },
    error: null,
  });
};

const getAllUsers = async (req, res) => {
  const users = await getUsers();
  res.status(200).json({
    data: users,
    error: null,
  });
};

module.exports = {
  createUser,
  getAllUsers,
};
