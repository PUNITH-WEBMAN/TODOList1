import { useState } from "react"
import axios from "axios"

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const ContactUser = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/contact/submit', {
        name: name,
        email: email,
        message: message
      })
      console.log(response)
      alert('Submitted successfully')
    } catch (error) {
      console.log(error)
      alert('Failed to submit')
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={ContactUser} className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Contact Us</h2>
        
        <div>
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input 
            type="text" 
            placeholder="Your name" 
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input 
            type="email" 
            placeholder="Your email" 
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea 
            placeholder="Your message" 
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact
