import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/authSlice'; 

const UserProfilePage = () => {
  const user = useSelector((state) => state.auth);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log('User:', user); 
  console.log('IsAuthenticated:', isAuthenticated);

  const handleLogout = () => {
    dispatch(logout()); 
    navigate('/login'); 
  };

  if (!isAuthenticated) {
    return <div className="text-center mt-10">Please log in to view your profile.</div>;
  }

  if (!user.userId) { 
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">User Profile</h2>
        <div className="space-y-4">
          <div>
            <strong className="block text-sm font-medium text-gray-700">Username</strong>
            <p className="text-gray-900">{user.userName}</p>
          </div>
          <div>
            <strong className="block text-sm font-medium text-gray-700">Email</strong>
            <p className="text-gray-900">{user.email}</p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={handleLogout}
            className="px-4 py-2 font-medium text-white bg-red-600 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;




