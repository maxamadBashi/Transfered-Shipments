import React from 'react';

const ReceiptSection = ({ shipment, type, isTop }) => {
    const dateStr = shipment.created_at ? new Date(shipment.created_at).toLocaleDateString('en-GB') : '';
    const receiptNo = shipment.shipment_id ? shipment.shipment_id.split('-').pop() : '0000';

    return (
        <div className={`receipt-section relative flex flex-col px-8 py-6 bg-white h-[148.5mm] box-border ${!isTop ? 'border-t border-gray-100' : ''}`}>
            {/* Header */}
            <div className="w-full relative border-b-2 border-black pb-2 mb-4 text-center">
                {/* ID in top left */}
                <div className="absolute left-0 top-0 text-left">
                    <span className="text-[8px] font-bold text-gray-400 block tracking-tight">ID: {shipment.shipment_id}</span>
                </div>

                {/* Receipt Number and Date in top right */}
                <div className="absolute right-0 top-0 text-right">
                    <span className="text-red-700 font-black text-4xl block leading-none tracking-tighter">{receiptNo}</span>
                    <span className="text-[10px] font-bold text-gray-500 uppercase block mt-1">DATE: {dateStr}</span>
                </div>

                {/* Centered Title - single line forced */}
                <div className="mx-24 pt-1">
                    <h1 className="text-2xl font-black text-blue-900 uppercase tracking-widest leading-none whitespace-nowrap overflow-hidden">
                        TRANSFERED SHIPMENTS
                    </h1>
                    <div className="flex justify-center gap-3 text-[9px] font-black text-blue-900 uppercase tracking-wider mt-1">
                        <span>TEL: 0617077778 / 0617081216</span>
                        <span className="border-l-2 border-blue-900 pl-3">MOGADISHU-SOMALIA</span>
                    </div>
                </div>

                {/* Copy Type Tag */}
                <div className="absolute left-0 bottom-[-8px] bg-black text-white px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest">
                    {type} COPY
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow flex border-t border-black">
                {/* Left Column: Sender (CNOR) */}
                <div className="w-1/2 border-r border-black flex flex-col h-full p-3 space-y-3">
                    <div className="flex flex-col border-b border-black pb-0.5">
                        <span className="text-[9pt] font-bold uppercase mb-0.5 text-gray-600">CNOR NAME:</span>
                        <span className="text-lg font-black uppercase text-center min-h-[1.2rem]">{shipment.sender_name}</span>
                    </div>
                    <div className="flex flex-col border-b border-black pb-0.5">
                        <span className="text-[9pt] font-bold uppercase mb-0.5 text-gray-600">ADDRESS:</span>
                        <span className="text-center italic min-h-[1.1rem] text-sm">{shipment.sender_address}</span>
                    </div>
                    <div className="flex flex-col border-b border-black pb-0.5">
                        <span className="text-[9pt] font-bold uppercase mb-0.5 text-gray-600">COUNTRY:</span>
                        <span className="text-center font-bold uppercase min-h-[1.1rem] tracking-widest text-sm">{shipment.sender_country}</span>
                    </div>
                    <div className="flex flex-col border-b border-black pb-0.5">
                        <span className="text-[9pt] font-bold uppercase mb-0.5 text-gray-600">TEL:</span>
                        <span className="text-center font-bold min-h-[1.1rem] text-sm">{shipment.sender_phone}</span>
                    </div>

                    <div className="mt-auto pt-2 border-t-2 border-black">
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-black uppercase underline underline-offset-4">AMOUNT:</span>
                            <span className="text-3xl font-black text-right px-2 py-1 border border-black bg-gray-50">${shipment.amount}</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Receiver (CNEE) */}
                <div className="w-1/2 flex flex-col h-full p-3 space-y-3">
                    <div className="flex flex-col border-b border-black pb-0.5">
                        <span className="text-[9pt] font-bold uppercase mb-0.5 text-gray-600">CNEE NAME:</span>
                        <span className="text-lg font-black uppercase text-center min-h-[1.2rem]">{shipment.receiver_name}</span>
                    </div>
                    <div className="flex flex-col border-b border-black pb-0.5">
                        <span className="text-[9pt] font-bold uppercase mb-0.5 text-gray-600">ADDRESS:</span>
                        <span className="text-center italic min-h-[1.1rem] text-sm">{shipment.receiver_address}</span>
                    </div>
                    <div className="flex flex-col border-b border-black pb-0.5">
                        <span className="text-[9pt] font-bold uppercase mb-0.5 text-gray-600">COUNTRY:</span>
                        <span className="text-center font-bold uppercase min-h-[1.1rem] tracking-widest text-sm">{shipment.receiver_country}</span>
                    </div>
                    <div className="flex flex-col border-b border-black pb-0.5">
                        <span className="text-[9pt] font-bold uppercase mb-0.5 text-gray-600">TEL:</span>
                        <span className="text-center font-bold min-h-[1.1rem] text-sm">{shipment.receiver_phone}</span>
                    </div>

                    <div className="mt-auto space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                            <div className="flex items-center border-b border-black pb-0.5">
                                <span className="font-bold uppercase text-[8pt] mr-1 text-gray-600">WEIGHT:</span>
                                <span className="flex-grow text-center font-bold text-base">{shipment.weight} KG</span>
                            </div>
                            <div className="flex items-center border-b border-black pb-0.5">
                                <span className="font-bold uppercase text-[8pt] mr-1 text-gray-600">PCS:</span>
                                <span className="flex-grow text-center font-bold text-base">{shipment.pcs || 1}</span>
                            </div>
                        </div>
                        <div className="flex items-center border-b border-black pb-0.5">
                            <span className="font-bold uppercase text-[8pt] mr-1 text-gray-600">CONTENT:</span>
                            <span className="flex-grow text-center italic text-sm">{shipment.content}</span>
                        </div>
                        <div className="pt-1">
                            <span className="text-[8px] font-bold uppercase text-gray-500">PICKED UP BY:</span>
                            <div className="h-8 border-b border-black border-dotted"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ReceiptPrint = ({ shipment }) => {
    if (!shipment) return null;

    return (
        <div className="a4-print-container bg-gray-100 p-0 sm:p-4 flex justify-center">
            <div className="bg-white shadow-2xl w-[210mm] h-[297mm] relative overflow-hidden print:shadow-none print:m-0 flex flex-col">
                {/* Top Section - Customer Copy */}
                <ReceiptSection shipment={shipment} type="CUSTOMER" isTop={true} />

                {/* Dashed Cutting Line */}
                <div className="absolute top-[148.5mm] left-0 w-full h-0 border-t-2 border-black border-dashed z-20 -translate-y-1/2"></div>

                {/* Bottom Section - Office Copy */}
                <ReceiptSection shipment={shipment} type="OFFICE" isTop={false} />
            </div>
        </div>
    );
};

export default ReceiptPrint;
