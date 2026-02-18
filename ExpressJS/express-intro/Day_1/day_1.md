# Express.js Day 1 — Basic Routing Practice

This project is my **Day-1 practice** for learning Express.js backend development.

The goal of this exercise is to understand:

* How to create an Express server
* How routing works
* How to send responses using JSON
* How HTTP status codes work

---

## Project Setup

Initialize project:

```bash
npm init -y
```

Install Express:

```bash
npm install express
```

Run server:

```bash
node index.js
```

Server runs on:

```
http://localhost:5000
```

---

## Routes Implemented

### Home Route

```
GET /
```

Returns server status.

---

### About Route

```
GET /about
```

Returns company information.

---

### Employees Route

```
GET /employees
```

Returns a list of employees stored in a local array.

---

### Error Simulation Route

```
GET /error
```

Returns a simulated server error response.

---

### Status Route

```
GET /status
```

Returns:

* server uptime
* timestamp

---

### 404 Handler

Handles all unknown routes.

---

## Concepts Practiced

* Express server setup
* Routing
* `req` and `res`
* `res.json()`
* `res.status()`
* API response structure
* Basic project organization

---

## Author

Backend learning journey — Express.js roadmap.
