import express, { response } from 'express';


const app = express();

app.get('/users', (request, response) => {

  return response.json('App funcionando');
})

app.listen(3333, () => {
  console.log('Server is running: htp://localhost:3333');
})