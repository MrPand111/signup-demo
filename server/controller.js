const service = require('./service');

const getList = async () => {
  const result = await service.getDB();
  return JSON.parse(result);
}

const signup = async (condition) => {
  const {
    number
  } = condition;
  const arr = await getList();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].number === number) {
      return 1;
    }
  }
  arr.push({
    id: Number(arr[arr.length - 1].id) + 1,
    ...condition
  });
  service.saveDB(JSON.stringify(arr));
  return 0;
}

const deleteItem = async (condition) => {
  const {
    id
  } = condition;
  const arr = await getList();
  const result = arr.filter((item) => {
    return item.id !== Number(id);
  })
  service.saveDB(JSON.stringify(result));
  return 0;
}

module.exports = {
  getList,
  signup,
  deleteItem
}