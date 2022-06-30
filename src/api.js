const express = require('express');
const app = express();

/**
 * @module API
 */

/**
 * Index Route
 * @name index
 * @path {GET} /
 */
app.get('/', (req, res) => res.json({ message: 'Hi mom!' }));

/**
 * Users Route
 * @name users
 * @path {POST} /users
 */
app.post('/users', (req, res) => res.json({ message: 'Hi mom!' }));

/**
 * Delete Products Route
 * @name products
 * @path {DELETE} /products
 */
app.delete('/products', (req, res) => res.json({ message: 'Hi mom!' }));

/**
 * Update user auth Route
 * @name auth
 * @path {PUT} /auth
 */
app.put('/auth', (req, res) => res.json({ message: 'Hi mom!' }));
