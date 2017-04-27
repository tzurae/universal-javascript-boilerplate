let express = require('express')
let app = express()

const PORT = 3000

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>')
})

app.listen(PORT,() => {
  console.log('http://localhost:' + PORT);
})
