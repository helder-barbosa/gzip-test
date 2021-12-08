const express = require('express')
const app = express()
const compression = require('compression')

const largeObj = []

for (let i = 0; i < 50000; i++) {
  largeObj.push({
    name: "Person " + i,
    address: "address " + i,
    description: "description"
  })
}

app.use(compression())
app.get('/', (req, res) => {
  res.header('Cache-Control', 'public, max-age=3600')
  res.send(largeObj)
})

app.listen(3000, () => console.log('[SERVER] Running...'))