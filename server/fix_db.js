const db = require('./db');

const fixDb = async () => {
    try {
        console.log('Checking database columns...');

        // Add pcs if missing
        try {
            await db.query('ALTER TABLE shipments ADD COLUMN pcs INTEGER');
            console.log('Added column: pcs');
        } catch (e) {
            console.log('Column pcs already exists or error:', e.message);
        }

        // Add amount if missing
        try {
            await db.query('ALTER TABLE shipments ADD COLUMN amount DECIMAL(10, 2)');
            console.log('Added column: amount');
        } catch (e) {
            console.log('Column amount already exists or error:', e.message);
        }

        console.log('Database fix complete.');
        process.exit(0);
    } catch (err) {
        console.error('Error fixing database:', err);
        process.exit(1);
    }
};

fixDb();
