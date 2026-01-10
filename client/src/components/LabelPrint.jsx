import React from 'react';

const LabelPrint = ({ shipment }) => {
    if (!shipment) return null;

    return (
        <div className="p-8 bg-white w-full max-w-sm mx-auto shipment-document box-border text-[16pt] leading-relaxed border-2 border-black">
            <div className="space-y-4">
                <div>
                    <span className="font-bold">To:</span> <span className="font-extrabold uppercase text-2xl">{shipment.receiver_name}</span>
                </div>

                <div className="whitespace-pre-wrap">
                    {shipment.receiver_address}
                </div>

                <div className="font-bold uppercase">
                    {shipment.receiver_country}
                </div>

                <div>
                    <span className="font-bold">Tel:</span> <span className="font-bold uppercase">{shipment.receiver_phone}</span>
                </div>

                <div className="border-t-2 border-black my-6"></div>

                <div>
                    <span className="font-bold">From:</span> <span className="font-extrabold uppercase text-2xl">{shipment.sender_name}</span>
                </div>

                <div>
                    <span className="font-bold">Content:</span> {shipment.content}
                </div>
            </div>
        </div>
    );
};

export default LabelPrint;
