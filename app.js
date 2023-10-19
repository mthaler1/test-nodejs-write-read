const mysql = require('mysql');
const express = require('express'); // Express hinzufügen
const app = express(); // Neue Express-Anwendung erstellen
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(express.json());


const connection = mysql.createConnection({
  host: 'projekte.tgm.ac.at',
  user: 'proj_quizit',
  password: 'ijie4Fae',
  database: 'proj_quizit',
  port: 3306
});



// GET-Listener hinzufügen
app.get('/test', (req, res) => {
  // Hier können Sie den Code für die Datenbankabfrage einfügen
  const sqlQuery = "INSERT INTO Mitglieder (id, name) VALUES (11, 'Simon')";

  connection.query(sqlQuery, (error, results) => {
    if (error) {
      console.error('Fehler beim Einfügen von Daten: ' + error.message);
      res.status(500).send('Fehler beim Einfügen von Daten');
    } else {
      console.log('Daten erfolgreich eingefügt.');
      res.status(200).send('Daten erfolgreich eingefügt');
    }
  });
});

app.get('/test2', (req, res) => {
    // Hier können Sie den Code für die Datenbankabfrage einfügen
    console.log('erfolg')
  });



app.post('/tenzi', (req, res) => {
    const jsonData = req.body; // Hier wird der gesamte JSON-Request-Body analysiert
  
    const klasse = jsonData.klasse;
  
    console.log(klasse);
  });

// 404-Handler hinzufügen
app.use((req, res) => {
  res.status(404).send('404 - Fehler');
});

// Server starten
const port = 3000;
app.listen(port, () => {
  console.log('Server läuft auf Port ' + port);
});
