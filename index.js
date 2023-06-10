const express = require("express");
const app = express();
const port = 3030;
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(cors());
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//define the parent route for the operations

// all routes define for products
const product = require("./routers/product.routes");
app.use("/", product);

// all routes define for customers
const customer = require("./routers/customer.routes");
app.use("/", customer);

// all routes for customer login
const customerAuth = require("./routers/customerLogin.routes");
app.use("/", customerAuth);

// all routes for categories
const categories = require("./routers/categories.routes");
app.use("/", categories);

// all routes for the cart products
const cart = require("./routers/cart.routes");
app.use("/", cart);

app.listen(port, () => {
  console.log(`the project is running on ${port} port`);
});
