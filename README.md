# 🚀 API Rest MongoDB Express

Welcome to the **API Rest MongoDB Express** project!  
A robust, scalable, and modular RESTful API built with **Node.js**, **Express**, and **MongoDB**.

---

## ✨ Features

- RESTful endpoints for CRUD operations
- MongoDB integration using Mongoose
- Modular route and controller structure
- Error handling and validation
- Ready-to-use for scalable backend projects

---

## 📦 Tech Stack

- **Node.js** (JavaScript)
- **Express.js** — Fast, unopinionated web framework
- **MongoDB** — NoSQL database
- **Mongoose** — Elegant MongoDB object modeling

---

## 🚦 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/mrsMatheusRocha/API-Rest-MongoDB-Express.git

# 2. Install dependencies
cd API-Rest-MongoDB-Express
npm install

# 3. Set up your .env file
# Copy .env.example to .env and fill in your environment variables (MongoDB URI, etc.)

# 4. Start the server
npm start
```

---

## 📁 Project Structure

```
.
├── controllers/    # Request handlers
├── models/         # Mongoose schemas
├── routes/         # Express routes
├── app.js          # Main Express app
└── ...
```

---

## 🔗 API Endpoints Example

### Livros (Books)

| Method | Endpoint         | Description           |
|--------|-----------------|-----------------------|
| GET    | `/livros`       | List all books        |
| POST   | `/livros`       | Create a new book     |
| GET    | `/livros/:id`   | Get a specific book   |
| PUT    | `/livros/:id`   | Update a book         |
| DELETE | `/livros/:id`   | Delete a book         |

### Autores (Authors)

| Method | Endpoint           | Description             |
|--------|-------------------|-------------------------|
| GET    | `/autores`        | List all authors        |
| POST   | `/autores`        | Create a new author     |
| GET    | `/autores/:id`    | Get a specific author   |
| PUT    | `/autores/:id`    | Update an author        |
| DELETE | `/autores/:id`    | Delete an author        |

---

> Crafted with 💻 by [mrsMatheusRocha](https://github.com/mrsMatheusRocha)
