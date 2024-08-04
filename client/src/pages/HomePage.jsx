import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">Welcome to Our Platform</h1>
        
        <p className="text-center mb-6 text-gray-600">
          To get started, please log in or register.
        </p>

        <div className="space-y-4">
          <div className="text-center">
            <Link
              to="/login"
              className="inline-block px-6 py-3 font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Login
            </Link>
          </div>
          
          <div className="text-center">
            <Link
              to="/register"
              className="inline-block px-6 py-3 font-medium text-white bg-green-600 rounded hover:bg-green-700"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
