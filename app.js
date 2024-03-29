const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
const usersRouter = require('./routes/user'); // Import usersRouter
// const authRouter = require('./routes/auth'); // Commented-out line
// app.use('/auth', authRouter); // Commented-out line

app.use('/users', usersRouter); // Use usersRouter

const productsRouter = require('./routes/products');
app.use('/products', productsRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
