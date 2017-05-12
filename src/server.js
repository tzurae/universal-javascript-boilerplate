import express from 'express'
import { renderToString } from 'react-dom/server';
import React from 'react'
import App from './component'
import Router from 'universal-router'

let app = express()

const PORT = 3000

app.use(express.static('public'))

let routes = {
  path: '/',
  async action () {
    return <App />
  },
}

let router = new Router(routes)

app.use((req, res) => {
  router.resolve({path:'/'}).then((comp) => {
    const html = renderToString(<App />)
    res.send(html)
  })
})

app.listen(PORT,() => {
  console.log('http://localhost:' + PORT);
})
