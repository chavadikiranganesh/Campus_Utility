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
    if (data.success) alert('Accommodation added');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Add Accommodation</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="w-full p-2 border mb-2" />
        <textarea placeholder="Address" value={form.address} onChange={(e) => setForm({...form, address: e.target.value})} className="w-full p-2 border mb-2"></textarea>
        <input type="number" placeholder="Rent" value={form.rent} onChange={(e) => setForm({...form, rent: e.target.value})} className="w-full p-2 border mb-2" />
        <textarea placeholder="Facilities" value={form.facilities} onChange={(e) => setForm({...form, facilities: e.target.value})} className="w-full p-2 border mb-2"></textarea>
        <input type="text" placeholder="Contact" value={form.contact} onChange={(e) => setForm({...form, contact: e.target.value})} className="w-full p-2 border mb-2" />
        <input type="text" placeholder="Image URL" value={form.image_url} onChange={(e) => setForm({...form, image_url: e.target.value})} className="w-full p-2 border mb-2" />
        <button type="submit" className="bg-blue-500 text-white p-2">Add Accommodation</button>
      </form>
    </div>
  );
};

export default AccommodationListing;