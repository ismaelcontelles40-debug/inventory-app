INSERT INTO categories (name, description)
VALUES
('Electrónica', 'Productos tecnológicos'),
('Hogar', 'Productos para el hogar');

INSERT INTO products (name, price, stock, category_id)
VALUES
('Auriculares', 50, 10, (SELECT id FROM categories WHERE name='Electrónica')),
('Silla', 120, 5, (SELECT id FROM categories WHERE name='Hogar'));