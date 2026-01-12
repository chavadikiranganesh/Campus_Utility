import React, { useState } from 'react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? '/api/auth/login' : '/api/auth/signup';
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await response.json();
    if (data.success) alert('Success');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{isLogin ? 'Login' : 'Signup'}</h1>
      <form onSubmit={handleSubmit}>
        {!isLogin && <input type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="w-full p-2 border mb-2" />}
        <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="w-full p-2 border mb-2" />
        <input type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} className="w-full p-2 border mb-2" />
        <button type="submit" className="bg-blue-500 text-white p-2">Submit</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)} className="mt-4 text-blue-500">{isLogin ? 'Need to signup?' : 'Already have account?'}</button>
    </div>
  );
};

export default Auth;