const express = require('express');

const inventoryRouter = require('./routes/inventory');

const app = express();
app.use(express.json());

const port = 8000;

app.use('/inventory', inventoryRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
