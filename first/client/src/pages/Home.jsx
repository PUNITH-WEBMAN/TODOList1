import { BiAlbum } from "react-icons/bi"; 
import React from 'react'

export default function Home
() {
  return (
    <div>
       <section className="bg-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Welcome to Our Homepage</h2>
          <p className="text-lg text-gray-600 mb-8">Discover our amazing features and services designed to help you succeed.</p>
          <a href="#features" className="bg-blue-600 text-white py-2 px-6 rounded-full font-medium hover:bg-blue-700 transition-colors">
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold text-gray-800 mb-12">Our Features</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">Feature 1</h4>
              <p className="text-gray-600">This is a description of the feature. It highlights the benefit and value.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">Feature 2</h4>
              <p className="text-gray-600">Another feature description with engaging content to attract users.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">Feature 3</h4>
              <p className="text-gray-600">More details about another unique feature you offer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section id="about" className="bg-blue-600 py-20 text-white text-center">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-4">Want to know more?</h3>
          <p className="text-lg mb-8">Get in touch with us to learn more about our services and features.</p>
          <a href="#contact" className="bg-white text-blue-600 py-2 px-6 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-6 text-center">
        <p>© 2023 My Website. All rights reserved.</p>
      </footer>
      {/* <button id="one"> <BiAlbum /><a href="https://www.google.com/"></a></button> */}
    </div>
  )
}

      