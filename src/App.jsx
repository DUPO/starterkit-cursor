
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HomePage from './components/HomePage'
import MixFlavorsPage from './components/MixFlavorsPage'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
        {/* Navigation */}
        <nav className="bg-white shadow-lg sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">🍦</span>
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Rainbow Scoops
                </h1>
              </Link>
              <div className="flex space-x-4">
                <Link 
                  to="/" 
                  className="px-4 py-2 rounded-full bg-pink-200 text-pink-800 font-semibold hover:bg-pink-300 transition-colors"
                >
                  🏠 Home
                </Link>
                <Link 
                  to="/mix" 
                  className="px-4 py-2 rounded-full bg-purple-200 text-purple-800 font-semibold hover:bg-purple-300 transition-colors"
                >
                  🎨 Mix Flavors
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mix" element={<MixFlavorsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}
