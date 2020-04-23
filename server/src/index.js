const express = require('express');

const app = express();
const port = 3000;

// http GET request
app.get('*', (req, res) => res.json({ message: 'no endpoint' }));

// make this return the param yared * 10
app.get('/sciencebowl/:yared', (req, res) => {
  res.send(req.params);
});

app.get('/usapho/:thermodynamics', (req, res) => {
  res.send(req.params);
});

app.listen(port, () =>
  console.log(`🔥 app listening at http://localhost:${port}`)
);
