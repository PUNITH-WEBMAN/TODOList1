import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-blue-600 text-white shadow-md  ">
      <ul className="flex justify-center gap-[10vw] space-x-4 p-4 md:space-x-8">
        <li><Link to="/" className="hover:text-gray-300 transition-colors">HOME</Link></li>
        <li><Link to="/about" className="hover:text-gray-300 transition-colors">About</Link></li>
        <li><Link to="/trips" className="hover:text-gray-300 transition-colors">Trips</Link></li>
        <li><Link to="/contact" className="hover:text-gray-300 transition-colors">Contact</Link></li>
        <li><Link to="/register" className="hover:text-gray-300 transition-colors">Register</Link></li>
        <li><Link to="/login" className="hover:text-gray-300 transition-colors">Login</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
