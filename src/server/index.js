import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../App';
import Html from '../client/Html';

const port = process.env.PORT || 4000;
const server = express();

server.get('/', (req, res) => {
  const body = renderToString(<App />);
  const title = 'React App';

  res.send(
    Html({
      body,
      title
    })
  );
});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);