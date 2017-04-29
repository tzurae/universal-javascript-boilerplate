import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <html lang="en">
      <head>
        <title>Simple Universal javascript</title>
        <link rel="stylesheet" href="style.css"/>
      </head>
      <body>
        <div>
          <h1> Hello wolrd </h1>
          <button onClick={() => alert()}>click me</button>
        </div>
      </body>
      </html>
    ) 
  }
};
