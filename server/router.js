const express = require('express');
const cats = require('./controller');
const router = express.Router();

router.post('/signup', async (req, res) => {
  console.log(req.body);
  const code = await cats.signup(req.body);
  if (code === 0) {
    res.send({
      code: 0,
      msg: '报名成功'
    })
  } else {
    res.send({
      code: 1,
      msg: '报名失败'
    })
  }
});

router.get('/getlist', async (req, res) => {
  const arr = await cats.getList();
  if (arr) {
    res.send({
      code: 0,
      list: arr
    })
  } else {
    res.send({
      code: 1,
      msg: '获取失败'
    })
  }
})

router.post('/delete', async (req, res) => {
  const code = await cats.deleteItem(req.body);
  if (code === 0) {
    res.send({
      code: 0,
      msg: '删除成功'
    })
  } else {
    res.send({
      code: 1,
      msg: '报名失败'
    })
  }
})

module.exports = router;