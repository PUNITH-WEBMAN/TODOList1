import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { loginUser } from '../../../backend/controlers/signupCtrl';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const LoginUser = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:5000/api/user/Login", {
            email: email,
            password: password,
          });
      console.log(response);
      alert("Login successful");
      navigate("/home");
    } catch (error) {
      if (error.response) {
        alert(`Login failed: ${error.response.data.message || error.response.statusText}`);
      } else if (error.request) {
        alert("Login failed: No response from the server.");
      } else {
        alert(`Login failed: ${error.message}`);
      }
    }
  };

  return (
    <div className="space-y-4 p-6 bg-gray-50 mt-20 rounded-lg shadow-md max-w-md mx-auto">
      <div>
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
        <input 
          type="email" 
          placeholder="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
        <input 
          type="password" 
          placeholder="Your password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <button 
          onClick={LoginUser}  
          className="w-full mt-3 bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
