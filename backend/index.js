import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sql } from "./db.js";

dotenv.config();

const app = express();

// =====================
// MIDDLEWARE
// =====================
app.use(cors());
app.use(express.json());

// =====================
// HEALTH CHECK
// =====================
app.get("/", (req, res) => {
  res.json({ ok: true, message: "API funcionando" });
});

// =====================
// GET PRODUCTS
// =====================
app.get("/products", async (req, res) => {
  try {
    const data = await sql`
      SELECT 
        p.id,
        p.name,
        p.price,
        p.stock,
        c.name AS category
      FROM products p
      LEFT JOIN categories c ON p.category_id = c.id
      ORDER BY p.name ASC
    `;

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// =====================
// CREATE PRODUCT
// =====================
app.post("/products", async (req, res) => {
  try {
    const { name, price, stock, category_id } = req.body;

    const result = await sql`
      INSERT INTO products (name, price, stock, category_id)
      VALUES (${name}, ${price}, ${stock}, ${category_id})
      RETURNING *
    `;

    res.json(result[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// =====================
// UPDATE PRODUCT
// =====================
app.patch("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, stock, category_id } = req.body;

    const result = await sql`
      UPDATE products
      SET name = ${name},
          price = ${price},
          stock = ${stock},
          category_id = ${category_id}
      WHERE id = ${id}
      RETURNING *
    `;

    res.json(result[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// =====================
// DELETE PRODUCT
// =====================
app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await sql`
      DELETE FROM products WHERE id = ${id}
    `;

    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// =====================
// SERVER (IMPORTANTE PARA RENDER)
// =====================
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Servidor funcionando en puerto ${PORT}`);
});