require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT,
});

app.get('/api/time', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        const currentTime = result.rows[0].now;
        res.json({ time: currentTime });
    } catch (err) {
        console.error('Error fetching time:', err);
        res.status(500).json({ error: 'Failed to fetch time' });
    }
});

app.get('/jsonplaceholder', async (req, res) => {
    try {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data from JSONPlaceholder:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});