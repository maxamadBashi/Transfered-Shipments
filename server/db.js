const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_AKjFeSc6p9LR@ep-old-bread-ahoypehm-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
