const db = require('./db');

const initDb = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS shipments (
      id SERIAL PRIMARY KEY,
      sender_name TEXT NOT NULL,
      sender_address TEXT,
      sender_phone TEXT,
      sender_country TEXT,
      receiver_name TEXT NOT NULL,
      receiver_address TEXT,
      receiver_phone TEXT,
      receiver_country TEXT,
      content TEXT,
      weight TEXT,
      pcs INTEGER,
      amount DECIMAL(10, 2),
      shipment_id TEXT UNIQUE NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  try {
    await db.query(query);
    console.log('Database initialized successfully');
    process.exit(0);
  } catch (err) {
    console.error('Error initializing database:', err);
    process.exit(1);
  }
};

initDb();
