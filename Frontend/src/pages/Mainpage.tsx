import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../config/axios';
import leftjpg from '../assets/leftpng.jpg'
const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const url = '/users/login';
    const payload = { email, password };

    try {
      const response = await axiosInstance.post(url, payload);
      const result = response.data;
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      if (result.success) {
        setSuccess(true);
        setMessage(result.message);
        navigate('/workspace');
      } else {
        setSuccess(false);
        setMessage(result.message);
      }
    } catch (error) {
      setSuccess(false);
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="flex flex-col md:flex-row w-full h-screen shadow-lg overflow-hidden rounded-lg ">
        {/* Left Side - Illustration */}
        <div className="w-full md:w-1/2 flex items-center justify-center ">
          <img
            src={leftjpg}
            alt="3D Blocks Illustration"
            className="w-full object-contain"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-8 bg-white flex flex-col justify-center bg-gradient-to-b from-gray-100 to-purple-200">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Hello Again!</h2>
          <p className="text-center text-gray-600 mb-8">Welcome back you have been missed!</p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="Enter username"
                required
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="Enter password"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                  Forgot Password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Sign In
              </button>
            </div>
            <div className="text-sm text-center mt-4">
              <p className="text-gray-600">Or continue with</p>
              <div className="flex justify-center space-x-4 mt-2">
                <button className="text-gray-600">
                  <img src="/path-to-google-icon.png" alt="Google" className="w-6 h-6" />
                </button>
                <button className="text-gray-600">
                  <img src="/path-to-apple-icon.png" alt="Apple" className="w-6 h-6" />
                </button>
                <button className="text-gray-600">
                  <img src="/path-to-facebook-icon.png" alt="Facebook" className="w-6 h-6" />
                </button>
              </div>
            </div>
          </form>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Not a member?{' '}
              <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                Register Now
              </a>
            </p>
          </div>
          {message && (
            <div className={`mt-4 text-center ${success ? 'text-green-500' : 'text-red-500'}`}>
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
