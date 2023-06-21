const express = require('express');
const app = express(); 
const routes = require("./routes.js"); 

const bodyParser = require("body-parser"); 
app.use(bodyParser.json()); 

// Cors va permettre de gérer la sécurité afin de limiter les possibilités sur l'API
const cors = require("cors"); 
const corsOptions = {
  origin: ['http://localhost:3000'], 
  credentials: true, 
  allowHeaders: ["sessionId", "Content-Type"], 
  exposedHeaders: ["sessionId"], 
  methods: "GET, HEAD, PUT, PATCH, POST, DELETE", 
  preflightContinue: false, 
}; 

app.use(cors(corsOptions)); 

// On va indiquer qu'il faut appeler l'API grâce à une fin de clés '/excuses', on lui indique les routes qui vont permettre d'aller voir les données
app.use("/excuses", routes); 

// On lui indique l'écoute du port
const port = 3001; 
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})
