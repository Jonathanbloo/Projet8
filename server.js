const express = require("express");
const compression = require("compression");
const path = require("path");

const app = express();
const PORT = 3000;

// Active la compression Gzip
app.use(compression());

// Sert les fichiers statiques (HTML, CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`✅ Serveur lancé : http://localhost:${PORT}`);
});
