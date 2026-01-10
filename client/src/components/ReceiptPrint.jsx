import React from 'react';

const ReceiptPrint = ({ shipment }) => {
    if (!shipment) return null;

    const dateStr = shipment.created_at ? new Date(shipment.created_at).toLocaleDateString('en-GB') : '';

    return (
        <div className="p-4 bg-white w-full max-w-4xl mx-auto shipment-document box-border relative min-h-[650px] border-2 border-black flex flex-col">
            {/* TOP HEADER TITLE (Centered & Enlarged) */}
            <div className="w-full relative border-b-2 border-black pb-6 mb-2 text-center pt-2">
                {/* ID and Date in the corners */}
                <div className="absolute left-0 top-0 text-left text-[9px] font-bold text-gray-400">
                    ID: {shipment.shipment_id}
                </div>
                <div className="absolute right-0 top-0 text-right">
                    <span className="text-red-700 font-black text-4xl block leading-none">{shipment.shipment_id.split('-').pop()}</span>
                    <span className="text-[10px] font-bold text-gray-500 uppercase">Date: {dateStr}</span>
                </div>

                <h1 className="text-4xl font-black text-blue-900 uppercase tracking-widest mb-2 whitespace-nowrap">
                    Transfered Shipments
                </h1>
                <div className="flex justify-center gap-6 text-[11px] font-black text-blue-900 uppercase tracking-wider">
                    <span className="flex items-center gap-1">Tel: 0617077778 / 0617081216</span>
                    <span className="border-l-2 border-blue-900 pl-6">Mogadishu-Somalia</span>
                </div>
            </div>

            <div className="flex-grow flex flex-col">
                {/* MAIN 2-COLUMN GRID */}
                <div className="flex-grow flex border-t border-black">
                    {/* LEFT COLUMN: CNOR (SENDER) */}
                    <div className="w-1/2 border-r-2 border-black flex flex-col h-full">
                        <div className="flex-grow p-4 space-y-4">
                            <div className="flex flex-col border-b border-black pb-1">
                                <span className="text-[10pt] font-bold uppercase mb-1">Cnor Name:</span>
                                <span className="text-xl font-black uppercase text-center">{shipment.sender_name}</span>
                            </div>
                            <div className="flex flex-col border-b border-black pb-1">
                                <span className="text-[10pt] font-bold uppercase mb-1">Adress:</span>
                                <span className="text-center italic">{shipment.sender_address}</span>
                            </div>
                            <div className="flex flex-col border-b border-black pb-1">
                                <span className="text-[10pt] font-bold uppercase mb-1">Country:</span>
                                <span className="text-center font-bold uppercase">{shipment.sender_country}</span>
                            </div>
                            <div className="flex flex-col border-b border-black pb-1">
                                <span className="text-[10pt] font-bold uppercase mb-1">Tel:</span>
                                <span className="text-center font-bold">{shipment.sender_phone}</span>
                            </div>
                        </div>

                        {/* AMOUNT AT THE BOTTOM OF SENDER COLUMN */}
                        <div className="p-4 border-t-2 border-black bg-gray-50">
                            <div className="flex items-center justify-between">
                                <span className="text-xl font-black uppercase">Amount:</span>
                                <span className="text-3xl font-black">${shipment.amount}</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: CNEE (RECEIVER) + DETAILS */}
                    <div className="w-1/2 flex flex-col h-full">
                        <div className="flex-grow p-4 space-y-4">
                            <div className="flex flex-col border-b border-black pb-1">
                                <span className="text-[10pt] font-bold uppercase mb-1">Cnee Name:</span>
                                <span className="text-xl font-black uppercase text-center">{shipment.receiver_name}</span>
                            </div>
                            <div className="flex flex-col border-b border-black pb-1">
                                <span className="text-[10pt] font-bold uppercase mb-1">Adress:</span>
                                <span className="text-center italic">{shipment.receiver_address}</span>
                            </div>
                            <div className="flex flex-col border-b border-black pb-1">
                                <span className="text-[10pt] font-bold uppercase mb-1">Country:</span>
                                <span className="text-center font-bold uppercase">{shipment.receiver_country}</span>
                            </div>
                            <div className="flex flex-col border-b border-black pb-1">
                                <span className="text-[10pt] font-bold uppercase mb-1">Tel:</span>
                                <span className="text-center font-bold">{shipment.receiver_phone}</span>
                            </div>
                        </div>

                        {/* WEIGHT / PCS / CONTENT AT THE BOTTOM OF RECEIVER COLUMN */}
                        <div className="p-4 border-t-2 border-black flex flex-col gap-4">
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex-grow flex items-center border-b border-black">
                                    <span className="font-bold uppercase text-[10pt] mr-2">Weight:</span>
                                    <span className="flex-grow text-center font-bold">{shipment.weight}</span>
                                </div>
                                <div className="w-24 flex items-center border-b border-black">
                                    <span className="font-bold uppercase text-[10pt] mr-2">Pcs:</span>
                                    <span className="flex-grow text-center font-bold">{shipment.pcs || 1}</span>
                                </div>
                            </div>
                            <div className="flex items-center border-b border-black pb-1">
                                <span className="font-bold uppercase text-[10pt] mr-2">Countent:</span>
                                <span className="flex-grow text-center italic">{shipment.content}</span>
                            </div>
                            <div className="pt-2">
                                <span className="text-[10px] font-bold uppercase text-gray-400">Picked up by:</span>
                                <div className="h-8 border-b border-black"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReceiptPrint;
