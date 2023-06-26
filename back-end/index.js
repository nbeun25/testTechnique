// Import : 
const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 8080;

// Permet la possibilité d'une connexion avec mySql
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

// Permet une sécurité - seul cet URL est autorisé à travailler avec ce server
var corsOption = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOption));

// Établissement de la connexion à la base de données
connection.connect((err) => {
  if (err) {
    console.error("Erreur lors de la connexion à la base de données :", err);
    return;
  }
  console.log("Connexion à la base de données réussie !");
});

app.use(bodyParser.json());

// Route qui permet d'afficher toutes les excuses
app.get("/api/excuses", (req, res) => {
  connection.query("SELECT * FROM excuse", (error, results) => {
    if (error) {
      console.error("Erreur lors de l'exécution de la requête :", error);
      res.status(500).send("Erreur lors de l'exécution de la requête");
      return;
    }
    res.json({ excuses: results });
  });
});

// Route qui permet d'afficher une seule excuse
app.get(`/api/excuse/:http_code`, (req, res) => {
  const http_code = parseInt(req.params.http_code);
  connection.query(
    `SELECT * FROM excuse WHERE http_code = ${http_code}`,
    (error, results) => {
      if (error) {
        console.error("Erreur lors de l'exécution de la requête :", error);
        res.status(500).send("Erreur lors de l'exécution de la requête");
        return;
      }
      res.json({ excuse: results });
    }
  );
});

// Route qui permet d'ajouter une excuse
app.post("/api/excuse/new", (req, res) => {
  console.log(req.body);
  const { http_code, tag, message } = req.body;

  if (!message || !tag || !http_code) {
    res.status(400).send("Données manquantes");
    return;
  }

  const insertQuery =
    "INSERT INTO excuse (http_code, tag, message) VALUES (?, ?, ?)";
  const values = [http_code, tag, message];

  connection.query(insertQuery, values, (error, results) => {
    if (error) {
      console.error("Erreur lors de l'exécution de la requête :", error);
      res.status(500).send("Erreur lors de l'exécution de la requête");
      return;
    }

    res.json({
      excuse: { http_code, tag, message },
    });
  });
});

// Ecoute du port
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
