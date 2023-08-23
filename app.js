const express = require('express');

const inventoryRouter = require('./routes/inventory');
const userRouter = require('./routes/user');
const { checkAuth } = require('./middlewares/user');

const app = express();
app.use(express.json());

const port = 8000;

app.use('/inventory', checkAuth, inventoryRouter);
app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
