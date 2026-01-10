const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Helper to generate shipment ID: TS-YYYY-XXXX
const generateShipmentId = async () => {
    const year = new Date().getFullYear();
    const res = await db.query(
        "SELECT shipment_id FROM shipments WHERE shipment_id LIKE $1 ORDER BY shipment_id DESC LIMIT 1",
        [`TS-${year}-%`]
    );

    if (res.rows.length === 0) {
        return `TS-${year}-0001`;
    }

    const lastId = res.rows[0].shipment_id;
    const lastNum = parseInt(lastId.split('-')[2]);
    const newNum = (lastNum + 1).toString().padStart(4, '0');
    return `TS-${year}-${newNum}`;
};

// POST /api/shipments - Save shipment
app.post('/api/shipments', async (req, res) => {
    try {
        const {
            sender_name, sender_address, sender_phone, sender_country,
            receiver_name, receiver_address, receiver_phone, receiver_country,
            content, weight, pcs, amount
        } = req.body;

        const shipment_id = await generateShipmentId();

        const query = `
      INSERT INTO shipments (
        sender_name, sender_address, sender_phone, sender_country,
        receiver_name, receiver_address, receiver_phone, receiver_country,
        content, weight, pcs, amount, shipment_id
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
      RETURNING *
    `;

        const values = [
            sender_name, sender_address, sender_phone, sender_country,
            receiver_name, receiver_address, receiver_phone, receiver_country,
            content, weight, pcs, amount, shipment_id
        ];

        const result = await db.query(query, values);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

// GET /api/shipments/:id - Get shipment by ID
app.get('/api/shipments/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await db.query('SELECT * FROM shipments WHERE id = $1', [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Shipment not found' });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

// GET /api/shipments - List all shipments
app.get('/api/shipments', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM shipments ORDER BY created_at DESC');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
