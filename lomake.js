const express = require('express');
const path = require('path');

const app = express();
app.use(express.urlencoded({ extended: true }));

const port = 3000;
const host = 'localhost';

app.get('/palaute', (req, res) =>
    res.sendFile(path.join(__dirname, 'templates/lomake.html'))
);

app.post('/palaute', (req, res) => {
    const nimi = req.body.nimi;
    const sposti = req.body.sposti;

    res.send(`Kiitos palautteestasi, ${nimi}!
    Otamme sinuun tarvittaessa yhteyttä sähköpostitse
    osoitteeseen ${sposti}.`);
});

app.listen(port, host, () => console.log(`${host}:${port} kuuntelee...`));
