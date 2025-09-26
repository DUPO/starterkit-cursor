import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const iceCreamFlavors = [
    {
      id: 1,
      name: "Strawberry Sunshine",
      emoji: "🍓",
      color: "from-pink-300 to-pink-500",
      description: "Sweet strawberry magic!"
    },
    {
      id: 2,
      name: "Banana Blast",
      emoji: "🍌",
      color: "from-yellow-300 to-yellow-500",
      description: "Super banana fun!"
    },
    {
      id: 3,
      name: "Blueberry Dreams",
      emoji: "🫐",
      color: "from-blue-300 to-blue-500",
      description: "Dreamy blueberry!"
    },
    {
      id: 4,
      name: "Orange Joy",
      emoji: "🍊",
      color: "from-orange-300 to-orange-500",
      description: "Happy orange time!"
    },
    {
      id: 5,
      name: "Grape Galaxy",
      emoji: "🍇",
      color: "from-purple-300 to-purple-500",
      description: "Purple space adventure!"
    },
    {
      id: 6,
      name: "Coconut Cloud",
      emoji: "🥥",
      color: "from-gray-200 to-gray-400",
      description: "Fluffy white clouds!"
    },
    {
      id: 7,
      name: "Vanilla Rainbow",
      emoji: "🤍",
      color: "from-white to-gray-100",
      description: "Classic vanilla love!"
    },
    {
      id: 8,
      name: "Mango Magic",
      emoji: "🥭",
      color: "from-yellow-400 to-orange-400",
      description: "Tropical mango fun!"
    },
    {
      id: 9,
      name: "Blippi Blue Blast",
      emoji: "💙",
      color: "from-blue-400 to-blue-600",
      description: "Learning is fun with blue!"
    },
    {
      id: 10,
      name: "Orange Excavator",
      emoji: "🚜",
      color: "from-orange-400 to-orange-600",
      description: "Dig into orange yumminess!"
    },
    {
      id: 11,
      name: "Monster Machine Mint",
      emoji: "🚗",
      color: "from-green-300 to-green-500",
      description: "Racing green adventure!"
    },
    {
      id: 12,
      name: "Fire Truck Red",
      emoji: "🚒",
      color: "from-red-400 to-red-600",
      description: "Emergency deliciousness!"
    },
    {
      id: 13,
      name: "Police Car Berry",
      emoji: "🚔",
      color: "from-blue-500 to-indigo-600",
      description: "Heroic berry flavor!"
    },
    {
      id: 14,
      name: "Ambulance Apple",
      emoji: "🚑",
      color: "from-white to-red-300",
      description: "Helping with apple goodness!"
    },
    {
      id: 15,
      name: "School Bus Banana",
      emoji: "🚌",
      color: "from-yellow-400 to-yellow-600",
      description: "Learning banana fun!"
    },
    {
      id: 16,
      name: "Garbage Truck Grape",
      emoji: "🗑️",
      color: "from-gray-400 to-purple-500",
      description: "Clean up with grape!"
    },
    {
      id: 17,
      name: "Airplane Apricot",
      emoji: "✈️",
      color: "from-orange-300 to-pink-400",
      description: "Flying high with apricot!"
    },
    {
      id: 18,
      name: "Train Track Tangerine",
      emoji: "🚂",
      color: "from-orange-500 to-red-400",
      description: "Choo-choo citrus fun!"
    },
    {
      id: 19,
      name: "Bicycle Blueberry",
      emoji: "🚲",
      color: "from-blue-300 to-purple-400",
      description: "Pedal into berry bliss!"
    },
    {
      id: 20,
      name: "Boat Berry Bonanza",
      emoji: "🛥️",
      color: "from-blue-400 to-teal-500",
      description: "Sailing with berry goodness!"
    },
    {
      id: 21,
      name: "Tractor Tutti Frutti",
      emoji: "🚜",
      color: "from-green-400 to-yellow-500",
      description: "Farm fresh fruit mix!"
    },
    {
      id: 22,
      name: "Soccer Ball Strawberry",
      emoji: "⚽",
      color: "from-white to-red-400",
      description: "Score with strawberry!"
    },
    {
      id: 23,
      name: "Basketball Orange",
      emoji: "🏀",
      color: "from-orange-500 to-orange-700",
      description: "Slam dunk orange flavor!"
    },
    {
      id: 24,
      name: "Baseball Vanilla",
      emoji: "⚾",
      color: "from-white to-red-300",
      description: "Home run vanilla treat!"
    },
    {
      id: 25,
      name: "Learning Colors Cherry",
      emoji: "🍒",
      color: "from-red-400 to-pink-500",
      description: "Red means yummy cherry!"
    },
    {
      id: 26,
      name: "ABC Apple Cinnamon",
      emoji: "🍎",
      color: "from-red-300 to-orange-400",
      description: "A is for apple delight!"
    },
    {
      id: 27,
      name: "Counting Coconut",
      emoji: "🥥",
      color: "from-white to-brown-300",
      description: "Count to ten with coconut!"
    },
    {
      id: 28,
      name: "Rainbow Learning Swirl",
      emoji: "🌈",
      color: "from-pink-300 via-purple-400 to-blue-400",
      description: "All colors in one scoop!"
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="text-8xl mb-4">🍦</div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
          Welcome to Rainbow Scoops!
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          Where every scoop is safe and super yummy! 🌈✨
        </p>
        <div className="bg-green-100 border-2 border-green-300 rounded-2xl p-4 max-w-md mx-auto">
          <div className="flex items-center justify-center space-x-2 text-green-800 font-semibold">
            <span className="text-2xl">✅</span>
            <span>No nuts, no dairy, no worries!</span>
          </div>
        </div>
      </div>

      {/* Ice Cream Menu */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Our Super Yummy Flavors! 🎉
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {iceCreamFlavors.map((flavor) => (
            <div
              key={flavor.id}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-4 border-transparent hover:border-pink-200"
            >
              <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${flavor.color} flex items-center justify-center text-4xl shadow-lg`}>
                {flavor.emoji}
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-gray-800">
                {flavor.name}
              </h3>
              <p className="text-center text-gray-600 text-sm">
                {flavor.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-white rounded-3xl p-8 shadow-lg border-4 border-purple-200">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Want to Create Your Own Flavor? 🎨
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Mix and match your favorite flavors to make something super special!
        </p>
        <Link
          to="/mix"
          className="inline-block bg-gradient-to-r from-pink-400 to-purple-500 text-white font-bold py-4 px-8 rounded-2xl text-xl hover:from-pink-500 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
        >
          🎨 Mix Flavors Now!
        </Link>
      </div>

      {/* Fun Facts */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-yellow-100 rounded-2xl p-6 text-center border-4 border-yellow-300">
          <div className="text-4xl mb-2">🌟</div>
          <h3 className="font-bold text-lg text-yellow-800">Super Safe</h3>
          <p className="text-yellow-700">Made with love and no allergens!</p>
        </div>
        <div className="bg-green-100 rounded-2xl p-6 text-center border-4 border-green-300">
          <div className="text-4xl mb-2">🌈</div>
          <h3 className="font-bold text-lg text-green-800">Rainbow Fun</h3>
          <p className="text-green-700">Every color of the rainbow!</p>
        </div>
        <div className="bg-pink-100 rounded-2xl p-6 text-center border-4 border-pink-300">
          <div className="text-4xl mb-2">😊</div>
          <h3 className="font-bold text-lg text-pink-800">Kid Approved</h3>
          <p className="text-pink-700">Made just for little ones!</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage


