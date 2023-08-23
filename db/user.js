const { insertDB, getTable } = require('./db');

const roles = ['admin', 'user'];

const addUser = async (user) => {
  const index = Math.round(Math.random());
  const userRole = roles[index];
  const data = {
    ...user,
    id: Math.floor(Math.random() * 500).toString(),
    apiKey: `${user.username}_${user.password}`,
    role: userRole,
  };

  await insertDB(data, 'users');
  return data;
};

const getUsers = async () => {
  const users = await getTable('users');
  return users;
};

module.exports = {
  addUser,
  getUsers,
};
