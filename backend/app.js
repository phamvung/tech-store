import fs from "node:fs/promises";
import bodyParser from "body-parser";
import express from "express";

const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Method",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, content-type"
  );
  next();
});

app.get("/products", async (req, res) => {
  const { search } = req.query;

  const productList = await fs.readFile("./data/products.json");
  let products = JSON.parse(productList);

  if (search) {
    const searchLower = search.toLowerCase();
    products = products.filter((product) =>
      product.name.toLowerCase().includes(searchLower)
    );
  }

  res.json({ products });
});

app.get("/products/:type", async (req, res) => {
  const { type } = req.params;

  const productList = await fs.readFile("./data/products.json");
  let products = JSON.parse(productList);

  products = products.filter((product) => product?.type === type);

  res.json({ products });
});

app.get("/coupons", async (req, res) => {
  const couponList = await fs.readFile("./data/coupon.json");
  let coupons = JSON.parse(couponList);

  res.json({ coupons });
});

app.get("/news", async (req, res) => {
  const newsList = await fs.readFile("./data/news.json");

  let news = JSON.parse(newsList);
  res.json({ news });
});

app.get("/products/detail/:id", async (req, res) => {
  const { id } = req.params;
  const productList = await fs.readFile("./data/products.json");
  const products = JSON.parse(productList);

  const productInfo = products.filter((product) => product.id === id);

  res.json({ productInfo });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
