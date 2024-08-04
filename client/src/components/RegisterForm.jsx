import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const RegisterForm = () => {
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' }); 
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/user/register', { userName, email, password });
      setMessage({ text: 'Registration successful. Please login.', type: 'success' });
      setTimeout(() => navigate('/login'), 2000); 
    } catch (error) {
      setMessage({ text: 'Registration failed', type: 'error' });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-9 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-1 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300" // Increased padding
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-1 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300" // Increased padding
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300" // Increased padding
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Register
          </button>
        </form>
        {message.text && (
          <p
            className={`mt-4 text-center ${message.type === 'success' ? 'text-green-500' : 'text-red-500'}`}
          >
            {message.text}
          </p>
        )}
      </div>
    </div>
  );
};

export default RegisterForm;



