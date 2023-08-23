const fs = require('fs/promises');
const path = require('path');

const DB_PATH = path.join(__dirname, 'db.json');

const getDB = async () => {
  const db = await fs.readFile(DB_PATH, { encoding: 'utf-8' });
  return JSON.parse(db);
};

const getTable = async (table) => {
  const db = await getDB();
  return db[table];
};

const saveDB = async (data, tableName) => {
  const db = await getDB();
  const newDb = {
    ...db,
    [tableName]: data,
  };
  await fs.writeFile(DB_PATH, JSON.stringify(newDb, null, 2));
  return newDb;
};

const insertDB = async (data, tableName) => {
  const table = await getTable(tableName);
  table.push(data);
  await saveDB(table, tableName);
  return data;
};

module.exports = {
  getDB,
  saveDB,
  insertDB,
  getTable,
};
