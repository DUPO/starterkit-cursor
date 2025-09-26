import React, { useState } from 'react'

const MixFlavorsPage = () => {
  const [selectedFlavors, setSelectedFlavors] = useState([])
  const [customName, setCustomName] = useState('')

  const availableFlavors = [
    { id: 1, name: "Strawberry", emoji: "🍓", color: "bg-pink-400" },
    { id: 2, name: "Banana", emoji: "🍌", color: "bg-yellow-400" },
    { id: 3, name: "Blueberry", emoji: "🫐", color: "bg-blue-400" },
    { id: 4, name: "Orange", emoji: "🍊", color: "bg-orange-400" },
    { id: 5, name: "Grape", emoji: "🍇", color: "bg-purple-400" },
    { id: 6, name: "Coconut", emoji: "🥥", color: "bg-gray-300" },
    { id: 7, name: "Vanilla", emoji: "🤍", color: "bg-gray-100" },
    { id: 8, name: "Mango", emoji: "🥭", color: "bg-yellow-500" }
  ]

  const handleFlavorClick = (flavor) => {
    if (selectedFlavors.find(f => f.id === flavor.id)) {
      // Remove flavor if already selected
      setSelectedFlavors(selectedFlavors.filter(f => f.id !== flavor.id))
    } else if (selectedFlavors.length < 3) {
      // Add flavor if less than 3 selected
      setSelectedFlavors([...selectedFlavors, flavor])
    }
  }

  const clearSelection = () => {
    setSelectedFlavors([])
    setCustomName('')
  }

  const generateRandomName = () => {
    const adjectives = ["Super", "Magic", "Rainbow", "Happy", "Sunny", "Sparkly", "Dreamy", "Funny"]
    const nouns = ["Scoop", "Mix", "Blast", "Dream", "Joy", "Magic", "Fun", "Adventure"]
    const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)]
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)]
    setCustomName(`${randomAdj} ${randomNoun}`)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-8xl mb-4">🎨</div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent mb-4">
          Mix Your Own Flavor!
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          Pick up to 3 flavors and create something amazing! 🌟
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Flavor Selection */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border-4 border-purple-200">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Choose Your Flavors! 🍦
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {availableFlavors.map((flavor) => {
              const isSelected = selectedFlavors.find(f => f.id === flavor.id)
              const isDisabled = selectedFlavors.length >= 3 && !isSelected
              
              return (
                <button
                  key={flavor.id}
                  onClick={() => handleFlavorClick(flavor)}
                  disabled={isDisabled}
                  className={`
                    p-4 rounded-2xl border-4 transition-all duration-300 transform hover:scale-105
                    ${isSelected 
                      ? 'border-green-400 bg-green-100 shadow-lg' 
                      : isDisabled 
                        ? 'border-gray-200 bg-gray-100 opacity-50 cursor-not-allowed' 
                        : 'border-gray-300 bg-white hover:border-purple-300 hover:shadow-md'
                    }
                  `}
                >
                  <div className={`w-16 h-16 mx-auto mb-2 rounded-full ${flavor.color} flex items-center justify-center text-3xl shadow-md`}>
                    {flavor.emoji}
                  </div>
                  <p className="font-semibold text-gray-800">{flavor.name}</p>
                  {isSelected && (
                    <div className="text-green-600 font-bold text-sm mt-1">✓ Selected!</div>
                  )}
                </button>
              )
            })}
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Selected: {selectedFlavors.length}/3 flavors
            </p>
            <button
              onClick={clearSelection}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
            >
              Clear All
            </button>
          </div>
        </div>

        {/* Custom Flavor Creation */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border-4 border-pink-200">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Your Custom Flavor! ✨
          </h2>
          
          {selectedFlavors.length > 0 ? (
            <div>
              {/* Visual Representation */}
              <div className="mb-6">
                <div className="flex justify-center items-center space-x-2 mb-4">
                  {selectedFlavors.map((flavor, index) => (
                    <div key={flavor.id} className="flex items-center">
                      <div className={`w-12 h-12 rounded-full ${flavor.color} flex items-center justify-center text-2xl shadow-md`}>
                        {flavor.emoji}
                      </div>
                      {index < selectedFlavors.length - 1 && (
                        <span className="text-2xl mx-2">+</span>
                      )}
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <span className="text-4xl">=</span>
                </div>
                <div className="w-20 h-20 mx-auto mt-4 rounded-full bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 flex items-center justify-center text-3xl shadow-lg">
                  🍦
                </div>
              </div>

              {/* Name Your Flavor */}
              <div className="mb-6">
                <label className="block text-lg font-semibold mb-3 text-gray-800">
                  Name Your Flavor! 🎯
                </label>
                <div className="flex space-x-2 mb-3">
                  <input
                    type="text"
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    placeholder="My Awesome Flavor!"
                    className="flex-1 px-4 py-3 border-2 border-purple-300 rounded-xl text-lg focus:border-purple-500 focus:outline-none"
                  />
                  <button
                    onClick={generateRandomName}
                    className="px-4 py-3 bg-purple-200 text-purple-800 rounded-xl font-semibold hover:bg-purple-300 transition-colors"
                  >
                    🎲 Random
                  </button>
                </div>
              </div>

              {/* Flavor Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Your Flavor Mix:</h3>
                <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-4">
                  <p className="text-gray-700">
                    {customName || "Unnamed Flavor"} - A delicious mix of {selectedFlavors.map(f => f.name).join(", ")}!
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="text-center space-y-3">
                <button
                  className="w-full bg-gradient-to-r from-pink-400 to-purple-500 text-white font-bold py-4 px-6 rounded-2xl text-xl hover:from-pink-500 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  🎉 Create My Flavor!
                </button>
                <button
                  onClick={clearSelection}
                  className="w-full bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl hover:bg-gray-300 transition-colors"
                >
                  Start Over
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🍦</div>
              <p className="text-xl text-gray-600 mb-6">
                Pick some flavors to start creating your masterpiece!
              </p>
              <div className="text-4xl">✨</div>
            </div>
          )}
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-12 bg-blue-100 rounded-3xl p-6 border-4 border-blue-300">
        <h3 className="text-xl font-bold text-center mb-4 text-blue-800">
          How to Mix Flavors! 📝
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-white rounded-xl p-4">
            <div className="text-3xl mb-2">1️⃣</div>
            <p className="font-semibold text-blue-800">Pick Flavors</p>
            <p className="text-blue-700 text-sm">Click up to 3 flavors you like!</p>
          </div>
          <div className="bg-white rounded-xl p-4">
            <div className="text-3xl mb-2">2️⃣</div>
            <p className="font-semibold text-blue-800">Name It</p>
            <p className="text-blue-700 text-sm">Give your flavor a fun name!</p>
          </div>
          <div className="bg-white rounded-xl p-4">
            <div className="text-3xl mb-2">3️⃣</div>
            <p className="font-semibold text-blue-800">Create!</p>
            <p className="text-blue-700 text-sm">Press the button to make it!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MixFlavorsPage


