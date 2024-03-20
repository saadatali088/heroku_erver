import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(' i am express Js server!')
})
app.get('/water', (req, res) => {
  res.send(' Here is your water!')
})
app.get('/food', (req, res) => {
  res.send(' here is your tea!')
})
app.listen(port, () => {
  console.log(`hello server is listening on ${port}`)

})            