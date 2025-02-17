const express = require('express');
const app = express();
const port = 4000;

// Middleware para manejar JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta principal
app.get('/', (req, res) => {
  res.send(`
    <form action="/submit" method="POST">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />
      <button type="submit">Submit</button>
    </form>
  `);
});

// Manejo del envío del formulario
app.post('/submit', (req, res) => {
  const { name } = req.body;
  if (!name || name.trim() === '') {
    return res.status(400).send('Name is required');
  }
  res.send(`Hello, ${name}!`);
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).type('text').send('Something broke!');
});

// Exportar la aplicación para las pruebas
module.exports = app;

// Iniciar el servidor solo si este archivo se ejecuta directamente
if (require.main === module) {
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
}
