import React, { useState } from 'react';
import axios from 'axios';
import ShipmentForm from './components/ShipmentForm';
import PrintLayout from './components/PrintLayout';

// Construct API URL: ensure it always ends with /api to avoid 404s
let apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
if (!apiUrl.endsWith('/api')) {
  apiUrl = apiUrl.replace(/\/$/, '') + '/api';
}
const API_URL = apiUrl;
console.log('Current VITE_API_URL:', import.meta.env.VITE_API_URL);
console.log('Resolved API_URL:', API_URL);

function App() {
  const [currentShipment, setCurrentShipment] = useState(null);
  const [isPrinting, setIsPrinting] = useState(false);

  const handleSave = async (formData) => {
    try {
      const response = await axios.post(`${API_URL}/shipments`, formData);
      const savedShipment = response.data;

      setCurrentShipment(savedShipment);
      setIsPrinting(true);

      // Give React time to render the print layout
      setTimeout(() => {
        window.print();
        setIsPrinting(false);
      }, 500);
    } catch (error) {
      console.error('Error saving shipment:', error);
      alert('Failed to save shipment. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      {/* Visual Header */}
      <div className="max-w-4xl mx-auto mb-8 text-center no-print">
        <h1 className="text-4xl font-black text-blue-900 uppercase tracking-tighter">Transfered Shipments</h1>
        <p className="text-gray-500 font-medium">Digital Shipment Management System</p>
      </div>

      {/* Main Form */}
      <div className="no-print">
        <ShipmentForm onSave={handleSave} />
      </div>

      {/* Print Layout (Hidden on screen via print-container logic) */}
      {isPrinting && currentShipment && (
        <PrintLayout shipment={currentShipment} />
      )}

      {/* Global Print Styles */}
      <style>{`
        @media screen {
          .print-only { display: none; }
        }
        @media print {
          .no-print { display: none !important; }
          .print-container { display: block !important; }
        }
      `}</style>
    </div>
  );
}

export default App;
