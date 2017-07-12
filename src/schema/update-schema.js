import { introspectionQuery } from 'graphql/utilities';
import path from 'path';
import fs from 'fs';

const fetch = require('node-fetch');
const req = {
  query: introspectionQuery
}

fetch("http://localhost:4000/graphql",
{
    method: "POST",
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req)
}).then(function(res) { 
  return res.json(); 
}).then (function(data) {
  fs.writeFileSync(
    path.join(__dirname, 'schema.json'),
    JSON.stringify(data),
  );
})



