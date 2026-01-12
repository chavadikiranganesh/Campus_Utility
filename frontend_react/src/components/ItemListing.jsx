import React, { useState } from 'react';

const ItemListing = () => {
  const [form, setForm] = useState({ title: '', description: '', category: '', price: '', condition: '', image_url: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, seller_id: 1 }) // Assume user_id 1
    });
    const data = await response.json();
    if (data.success) alert('Item added');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Add Item</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={form.title} onChange={(e) => setForm({...form, title: e.target.value})} className="w-full p-2 border mb-2" />
        <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({...form, description: e.target.value})} className="w-full p-2 border mb-2"></textarea>
        <select value={form.category} onChange={(e) => setForm({...form, category: e.target.value})} className="w-full p-2 border mb-2">
          <option value="">Category</option>
          <option value="book">Book</option>
          <option value="calculator">Calculator</option>
          <option value="tool">Tool</option>
        </select>
        <input type="number" placeholder="Price" value={form.price} onChange={(e) => setForm({...form, price: e.target.value})} className="w-full p-2 border mb-2" />
        <select value={form.condition} onChange={(e) => setForm({...form, condition: e.target.value})} className="w-full p-2 border mb-2">
          <option value="">Condition</option>
          <option value="new">New</option>
          <option value="used">Used</option>
          <option value="donation">Donation</option>
        </select>
        <input type="text" placeholder="Image URL" value={form.image_url} onChange={(e) => setForm({...form, image_url: e.target.value})} className="w-full p-2 border mb-2" />
        <button type="submit" className="bg-blue-500 text-white p-2">Add Item</button>
      </form>
    </div>
  );
};

export default ItemListing;