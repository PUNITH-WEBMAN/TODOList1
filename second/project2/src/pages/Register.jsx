import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// import { registerUser } from "../../../backend/controlers/signupCtrl";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  
  const navigate = useNavigate();

  const RegisterUser = async (e) => {e.preventDefault();
  try {
    const response = await axios.post('http://localhost:5000/api/user/', {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    });
  
    console.log(response);
    alert("Registered");
    navigate("/Login");
  
  } catch (error) {
    let causeMessage = "Unknown error occurred."; // Default message for the 'cause' property
  
    // Check for different error scenarios
    if (error.response) {
      // Server responded with a status outside the 2xx range
      causeMessage = error.response.data.message || error.response.statusText;
      alert(`Error: ${causeMessage}`);
    } else if (error.request) {
      // No response received from the server
      causeMessage = "No response from the server.";
      alert(`Error: ${causeMessage}`);
    } else {
      // Other errors
      causeMessage = error.message;
      alert(`Error: ${causeMessage}`);
    }
  
    // Optionally, attach the cause to the error object for debugging/logging
    console.error("Error details:", { ...error, cause: causeMessage });
  }
}
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={RegisterUser}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm space-y-6"
      >
        <div>
          <label
            htmlFor="firstname"
            className="block text-gray-700 font-semibold mb-2"
          >
            Firstname:
          </label>
          <input
            type="text"
            placeholder="Your fisrt name"
            onChange={(e) => setFirstname(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="lastname"
            className="block text-gray-700 font-semibold mb-2"
          >
            Lastname:
          </label>
          <input
            type="text"
            placeholder="Your last name"
            onChange={(e) => setLastname(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            placeholder="Your email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-gray-700 font-semibold mb-2"
          >
            Password:
          </label>
          <input
            type="password"
            placeholder="Your password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label htmlFor="password"
            className="block text-gray-700 font-semibold mb-2"
        >Confirm password:</label>
                <input
                   type="password"
                   placeholder="Your password"
                   onChange={(e) => setconfirmPassword(e.target.value)}
                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
             
                />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;




