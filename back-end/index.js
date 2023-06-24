const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3001;

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "@Belgique59114",
  database: "dbExcuses",
});

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
      message: "Excuse créée avec succès",
      excuse: { http_code, tag, message },
    });
  });
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});