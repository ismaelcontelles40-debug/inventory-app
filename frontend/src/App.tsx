import { useEffect, useState } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
};

const API_URL = "http://localhost:3000/products";

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    category_id: "",
  });

  // ======================
  // LOAD DATA
  // ======================
  const loadData = async () => {
    try {
      setLoading(true);

      const res = await fetch(API_URL);
      const data = await res.json();

      setProducts(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // ======================
  // CREATE PRODUCT
  // ======================
  const createProduct = async () => {
    try {
      await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          price: Number(form.price),
          stock: Number(form.stock),
          category_id: form.category_id,
        }),
      });

      setMessage("Producto creado correctamente ✔");

      setForm({
        name: "",
        price: "",
        stock: "",
        category_id: "",
      });

      await loadData();

      setTimeout(() => setMessage(""), 2000);
    } catch (err) {
      console.log(err);
    }
  };

  // ======================
  // DELETE PRODUCT
  // ======================
  const deleteProduct = async (id: string) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      await loadData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h1>Inventory App</h1>

      {message && <p style={{ color: "lightgreen" }}>{message}</p>}

      {/* FORM */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <input
          placeholder="Nombre"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          placeholder="Precio"
          value={form.price}
          onChange={(e) =>
            setForm({ ...form, price: e.target.value })
          }
        />

        <input
          placeholder="Stock"
          value={form.stock}
          onChange={(e) =>
            setForm({ ...form, stock: e.target.value })
          }
        />

        <select
          value={form.category_id}
          onChange={(e) =>
            setForm({ ...form, category_id: e.target.value })
          }
        >
          <option value="">Categoría</option>
          <option value="7cc15eb2-850b-4d9d-b845-0604086f8ea9">
            Electrónica
          </option>
        </select>

        <button onClick={createProduct}>Crear</button>
      </div>

      {/* CONTENT */}
      {loading ? (
        <p style={{ textAlign: "center" }}>Cargando...</p>
      ) : products.length === 0 ? (
        <p style={{ textAlign: "center" }}>No hay productos</p>
      ) : (
        products.map((p) => (
          <div className="card" key={p.id}>
            <h3>{p.name}</h3>
            <p>Precio: {p.price}€</p>
            <p>Stock: {p.stock}</p>
            <p>Categoría: {p.category}</p>

            <button
              style={{ background: "#ef4444" }}
              onClick={() => deleteProduct(p.id)}
            >
              Eliminar
            </button>
          </div>
        ))
      )}
    </div>
  );
}