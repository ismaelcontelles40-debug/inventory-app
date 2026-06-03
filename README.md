# Inventory App - Full Stack CRUD

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

---

# Descripción

Inventory App es una aplicación Full Stack de gestión de inventario con operaciones CRUD.

Permite crear, leer, actualizar y eliminar productos conectados a una base de datos PostgreSQL mediante una API REST desarrollada con Node.js y Express.

El frontend está desarrollado con React + Vite + TypeScript, aplicando arquitectura moderna y separación de responsabilidades.

---

---

# Despliegue en producción

La aplicación web ha sido desplegada en producción y se puede testear en vivo a través del siguiente enlace:

Frontend en Vercel: https://inventory-app-p2l3.vercel.app

---
# Funcionalidades

La aplicación incluye:

- Listado dinámico de productos
- Creación de productos
- Edición de productos
- Eliminación de productos
- Relación entre productos y categorías
- API REST completa
- Persistencia en base de datos
- Arquitectura Full Stack organizada
- Comunicación entre frontend y backend

---

# Tecnologías utilizadas

## Frontend

- React
- TypeScript
- Vite
- CSS3

## Backend

- Node.js
- Express

## Base de datos

- PostgreSQL
- Neon Database

## Herramientas adicionales

- Git
- GitHub
- API REST

---

# Arquitectura del proyecto

```text
Frontend (React + Vite + TypeScript)
                ↓
      API REST (Node.js + Express)
                ↓
 Base de datos (PostgreSQL - Neon)
```

---

# Estructura del proyecto

```bash
inventory-app/
│
├── backend/
│   ├── index.js
│   ├── db.js
│   ├── package.json
│
├── frontend/
│   ├── src/
│
├── sql/
│   ├── schema.sql
│
└── README.md
```

---

# Instalación del proyecto

## Clonar repositorio

```bash
git clone https://github.com/ismaelcontelles40-debug/inventory-app.git
cd inventory-app
```

---

# Configuración del backend

Acceder a la carpeta backend:

```bash
cd backend
```

Instalar dependencias:

```bash
npm install
```

Ejecutar servidor:

```bash
npm run dev
```

Servidor disponible en:

```txt
http://localhost:3000
```

---

# Configuración del frontend

Acceder a la carpeta frontend:

```bash
cd frontend
```

Instalar dependencias:

```bash
npm install
```

Ejecutar entorno de desarrollo:

```bash
npm run dev
```

Frontend disponible en:

```txt
http://localhost:5173
```

---

# API REST

## Endpoints de productos

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/products` | Obtener productos |
| POST | `/products` | Crear producto |
| PATCH | `/products/:id` | Actualizar producto |
| DELETE | `/products/:id` | Eliminar producto |

---

# Base de datos

## Tablas principales

- `products`
- `categories`

## Relación entre tablas

```txt
products.category_id → categories.id
```

Esto permite relacionar cada producto con una categoría específica dentro del sistema.

---

# Objetivos de aprendizaje

Durante este proyecto se trabajan conceptos como:

- Desarrollo Full Stack
- Arquitectura cliente-servidor
- API REST
- CRUD completo
- Persistencia de datos
- PostgreSQL
- Comunicación frontend-backend
- Organización de proyectos
- Buenas prácticas de desarrollo

---

# Ventajas de la arquitectura

La implementación desarrollada aporta:

- Separación clara entre frontend y backend
- Escalabilidad futura
- Mejor mantenibilidad
- Reutilización de lógica
- Organización modular
- Persistencia real de datos
- Arquitectura moderna Full Stack

---

# Autor

**Ismael Contelles**  
Bootcamp Full Stack - 2026