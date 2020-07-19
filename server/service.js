const fs = require('fs');
const PATH = './db.json';

const getDB = async () => {
  return await fs.promises.readFile(PATH, 'utf-8', (err, data) => {
    if (err) {
      console.log('read error');
      return;
    } else {
      console.log('read success');
      const result = data;
      return result;
    }
  })
}

const saveDB = (txt) => {
  return fs.promises.writeFile(PATH, txt, 'utf8', (err) => {
    if (err) {
      console.log('write error');
      return;
    } else {
      console.log('write success');
      return;
    }
  })
}

module.exports = {
  getDB,
  saveDB
}