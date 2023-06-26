const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 8080;

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

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

app.post("/api/excuses/new", (req, res) => {
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

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
