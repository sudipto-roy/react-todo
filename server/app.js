import 'babel-polyfill';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import bodyParser from 'body-parser';

import App from '../src/App';

const port = process.env.PORT || 4000;
const app = express();

app.use(bodyParser.json());
app.use(express.static('build'));

app.get('*', (req, res) => {
  const context = {}
  const content = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const html = `<html>
    <head></head>
    <body>
      <div id="app">${content}</div>
    </body>
  </html>`
  res.send(html);
});

app.listen(port);
console.log(`Serving at http://localhost:${port}`);