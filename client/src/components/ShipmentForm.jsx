import React, { useState } from 'react';
import { Package, Send, User, MapPin, Phone, Globe, Weight, DollarSign, FileText } from 'lucide-react';

const ShipmentForm = ({ onSave }) => {
    const [formData, setFormData] = useState({
        sender_name: '',
        sender_address: '',
        sender_phone: '',
        sender_country: '',
        receiver_name: '',
        receiver_address: '',
        receiver_phone: '',
        receiver_country: '',
        content: '',
        weight: '',
        pcs: '',
        amount: '',
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await onSave(formData);
        setLoading(false);
    };

    return (
        <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100 my-8">
            <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-8 text-white">
                <div className="flex items-center gap-3">
                    <Package size={32} />
                    <h1 className="text-3xl font-extrabold tracking-tight">New Shipment Entry</h1>
                </div>
                <p className="mt-2 text-blue-100 opacity-80">Enter sender and receiver details to generate documents.</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* FROM SECTION */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold flex items-center gap-2 text-blue-800 border-b-2 border-blue-100 pb-2">
                            <Send size={20} />
                            FROM (Sender)
                        </h2>
                        <div className="space-y-4">
                            <div className="relative">
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Cnor Name</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input required name="sender_name" value={formData.sender_name} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none" placeholder="John Doe" />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Address</label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
                                    <textarea required name="sender_address" value={formData.sender_address} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none" rows="2" placeholder="123 Sender St, City"></textarea>
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Country</label>
                                <div className="relative">
                                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input required name="sender_country" value={formData.sender_country} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none" placeholder="Somalia" />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Tel</label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input required name="sender_phone" value={formData.sender_phone} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none" placeholder="061..." />
                                </div>
                            </div>
                            <div className="pt-4 mt-2">
                                <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1 block">Amount ($)</label>
                                <div className="relative">
                                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input required type="number" step="0.01" name="amount" value={formData.amount} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none font-bold text-xl" placeholder="0.00" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* TO SECTION */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold flex items-center gap-2 text-indigo-800 border-b-2 border-indigo-100 pb-2">
                            <User size={20} />
                            TO (Receiver)
                        </h2>
                        <div className="space-y-4">
                            <div className="relative">
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Cnee Name</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input required name="receiver_name" value={formData.receiver_name} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none" placeholder="Jane Smith" />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Address</label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
                                    <textarea required name="receiver_address" value={formData.receiver_address} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none" rows="2" placeholder="456 Receiver Ave, City"></textarea>
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Country</label>
                                <div className="relative">
                                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input required name="receiver_country" value={formData.receiver_country} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none" placeholder="UK" />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Tel</label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input required name="receiver_phone" value={formData.receiver_phone} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none" placeholder="061..." />
                                </div>
                            </div>

                            {/* SHIPMENT INFO GROUPED WITH RECEIVER */}
                            <div className="mt-2 space-y-4">
                                <div>
                                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Contents</label>
                                    <div className="relative">
                                        <FileText className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                        <input required name="content" value={formData.content} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none italic" placeholder="Documents, Clothes, etc." />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Weight (kg)</label>
                                        <div className="relative">
                                            <Weight className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                            <input required type="number" step="0.01" name="weight" value={formData.weight} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none font-bold" placeholder="0.00" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Pieces (Pcs)</label>
                                        <div className="relative">
                                            <Package className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                            <input required type="number" name="pcs" value={formData.pcs} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none font-bold" placeholder="1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8">
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xl rounded-xl shadow-lg transform hover:-translate-y-1 transition-all active:scale-95 disabled:bg-gray-400 disabled:transform-none"
                    >
                        {loading ? 'Processing...' : 'Save & Print Documents'}
                    </button>
                    <p className="text-center text-gray-400 text-xs mt-4">One form input generates both Customer Receipt and Box Labels automatically.</p>
                </div>
            </form>
        </div>
    );
};

export default ShipmentForm;
