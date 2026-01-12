import React, { useState } from 'react';

const AccommodationListing = () => {
  const [form, setForm] = useState({ name: '', address: '', rent: '', facilities: '', contact: '', image_url: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/accommodations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, owner_id: 1 }) // Assume user_id 1
    });
    const data = await response.json();
    if (data.success) {
      alert('Accommodation listed successfully!');
      setForm({ name: '', address: '', rent: '', facilities: '', contact: '', image_url: '' });
    } else {
      alert('Error listing accommodation');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-2xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">List Your Accommodation</h1>
          <p className="text-gray-600">Help students find the perfect place to stay</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Property Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({...form, name: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
            <textarea
              value={form.address}
              onChange={(e) => setForm({...form, address: e.target.value})}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Rent ($)</label>
              <input
                type="number"
                value={form.rent}
                onChange={(e) => setForm({...form, rent: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contact Information</label>
              <input
                type="text"
                value={form.contact}
                onChange={(e) => setForm({...form, contact: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Facilities & Amenities</label>
            <textarea
              value={form.facilities}
              onChange={(e) => setForm({...form, facilities: e.target.value})}
              rows={3}
              placeholder="e.g., WiFi, Laundry, Parking, etc."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
            <input
              type="url"
              value={form.image_url}
              onChange={(e) => setForm({...form, image_url: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition duration-200"
          >
            List Accommodation
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccommodationListing;