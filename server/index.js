const express = require('express')
const app = express()
const port = 4000

app.get('/products', (req, res) => {
  res.send(['hawkins','baltra','panasonic'])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})