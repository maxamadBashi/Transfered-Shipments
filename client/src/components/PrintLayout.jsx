import React from 'react';
import ReceiptPrint from './ReceiptPrint';
import LabelPrint from './LabelPrint';

const PrintLayout = ({ shipment }) => {
    return (
        <div className="print-container">
            <div className="page-break">
                <ReceiptPrint shipment={shipment} />
            </div>
            <div>
                <LabelPrint shipment={shipment} />
            </div>
        </div>
    );
};

export default PrintLayout;
