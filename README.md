# TRANSFERED SHIPMENTS - Digital System

A full-stack automated shipment management system designed to replace handwritten papers.

## Features
- **Single Data Entry**: Input details once, generate everything.
- **Automatic Dual Print**: Generates a Customer Receipt and a Box Label on two separate pages.
- **Database Persistence**: Saves all shipments to PostgreSQL (Neon).
- **Auto ID Generation**: Format `TS-YYYY-XXXX`.
- **Professional Design**: B&W print-friendly professional layouts.

## tech Stack
- **Frontend**: React, Vite, Tailwind CSS, Lucide Icons, Axios.
- **Backend**: Node.js, Express, pg (PostgreSQL).
- **Database**: PostgreSQL (Neon).

## Installation & Setup

### 1. Prerequisite: Node.js
Ensure you have Node.js installed.

### 2. Backend Setup
```bash
cd server
npm install
node init.js  # Initializes the database table
npm run dev   # Or node server.js
```

### 3. Frontend Setup
```bash
cd client
npm install
npm run dev
```

## How to Use
1. Open the frontend URL (usually `http://localhost:5173`).
2. Fill out the **Sender**, **Receiver**, and **Shipment Info** fields.
3. Click **"Save & Print Documents"**.
4. The system will:
   - Save the data to the database.
   - Automatically generate a unique Shipment ID.
   - Open the browser's print dialog.
   - Show two pages:
     - **Page 1**: Customer Receipt (Full details).
     - **Page 2**: Box Label (Receiver details + Package info).

## Print Settings
For best results in the print dialog:
- **Layout**: Portrait
- **Margins**: None or Minimum
- **Headers and Footers**: Off
- **Background Graphics**: On (to show borders and black headers)
