import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const url = isSignUp ? 'https://product-deal-backend.onrender.com/api/users/register' : 'https://product-deal-backend.onrender.com/api/users/login';
    const payload = isSignUp ? { fullname, email, password } : { email, password };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.success) {
        setSuccess(true);
        setMessage(result.message);
        navigate('/deals')
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
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Left Side - Signup/Signin Form */}
      <div className="w-full md:w-1/2 bg-white p-8 shadow-lg flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-center mb-8">
          {isSignUp ? 'Create an Account' : 'Welcome Back!'}
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {isSignUp && (
            <div>
              <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          )}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            {!isSignUp && (
              <>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember_me"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </a>
                </div>
              </>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isSignUp ? 'Sign up' : 'Sign in'}
            </button>
          </div>
          <div className="text-sm text-center">
            {isSignUp ? (
              <>
                Already have an account?{' '}
                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  onClick={() => setIsSignUp(false)}
                >
                  Sign in
                </button>
              </>
            ) : (
              <>
                Don't have an account?{' '}
                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  onClick={() => setIsSignUp(true)}
                >
                  Sign up
                </button>
              </>
            )}
          </div>
          {message && (
            <div className={`mt-4 text-center ${success ? 'text-green-500' : 'text-red-500'}`}>
              {message}
            </div>
          )}
        </form>
      </div>

      {/* Right Side - Company Description */}
      <div className="w-full md:w-1/2 bg-indigo-600 p-8 text-white flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Company</h2>
        <p className="text-lg mb-4">
          We are a leading provider of innovative solutions in the production deal industry. Our mission is to connect
          producers with the best opportunities and resources to help them succeed in their projects.
        </p>
        <p className="text-lg mb-4">
          Whether you're looking to find the perfect deal, manage your projects efficiently, or connect with top talent,
          we've got you covered. Join us today and take your productions to the next level.
        </p>
        <p className="text-lg">
          Our platform offers a range of features designed to make your life easier, including advanced search tools,
          project management features, and a vibrant community of industry professionals.
        </p>
      </div>
    </div>
  );
};

export default MainPage;
