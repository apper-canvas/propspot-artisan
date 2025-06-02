import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import MainFeature from '../components/MainFeature'
import ApperIcon from '../components/ApperIcon'

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <motion.header 
        className="glass-effect fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                <ApperIcon name="Building2" size={24} className="text-white" />
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-gradient">PropSpot</h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-surface-700 hover:text-primary transition-colors">Properties</a>
              <a href="#" className="text-surface-700 hover:text-primary transition-colors">Agents</a>
              <a href="#" className="text-surface-700 hover:text-primary transition-colors">About</a>
              <button className="btn-primary">List Property</button>
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-xl bg-surface-100 hover:bg-surface-200 transition-colors"
              >
                <ApperIcon name={isDarkMode ? "Sun" : "Moon"} size={20} />
              </button>
              <button className="md:hidden p-2 rounded-xl bg-surface-100 hover:bg-surface-200 transition-colors">
                <ApperIcon name="Menu" size={20} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-900 mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Find Your <span className="text-gradient">Dream Property</span>
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-surface-600 mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Discover the perfect home with our comprehensive real estate marketplace. 
            Search, filter, and connect with properties that match your lifestyle.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="flex items-center space-x-4 text-surface-600">
              <div className="flex items-center space-x-2">
                <ApperIcon name="MapPin" size={20} className="text-primary" />
                <span className="text-sm sm:text-base">50+ Cities</span>
              </div>
              <div className="flex items-center space-x-2">
                <ApperIcon name="Home" size={20} className="text-secondary" />
                <span className="text-sm sm:text-base">10,000+ Properties</span>
              </div>
              <div className="flex items-center space-x-2">
                <ApperIcon name="Users" size={20} className="text-accent" />
                <span className="text-sm sm:text-base">5,000+ Agents</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Feature */}
      <MainFeature />

      {/* Features Grid */}
      <motion.section 
        className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-surface-900 mb-4">
              Why Choose PropSpot?
            </h3>
            <p className="text-lg text-surface-600 max-w-2xl mx-auto">
              Experience the future of real estate with our innovative platform designed for modern property seekers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: "Search",
                title: "Smart Search",
                description: "Advanced filters and AI-powered recommendations to find your perfect match.",
                color: "text-primary"
              },
              {
                icon: "Shield",
                title: "Verified Listings",
                description: "All properties are verified and vetted by our expert team for your peace of mind.",
                color: "text-accent"
              },
              {
                icon: "MessageCircle",
                title: "Direct Communication",
                description: "Connect directly with agents and owners through our integrated messaging system.",
                color: "text-secondary"
              },
              {
                icon: "TrendingUp",
                title: "Market Insights",
                description: "Get real-time market data and trends to make informed decisions.",
                color: "text-purple-600"
              },
              {
                icon: "Camera",
                title: "Virtual Tours",
                description: "Experience properties from anywhere with our immersive virtual tour technology.",
                color: "text-pink-600"
              },
              {
                icon: "Clock",
                title: "24/7 Support",
                description: "Our dedicated support team is available around the clock to assist you.",
                color: "text-indigo-600"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="filter-card group hover:shadow-neu-light transition-all duration-300"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r from-${feature.color.split('-')[1]}-100 to-${feature.color.split('-')[1]}-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <ApperIcon name={feature.icon} size={24} className={feature.color} />
                </div>
                <h4 className="text-xl font-semibold text-surface-900 mb-3">{feature.title}</h4>
                <p className="text-surface-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-surface-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                  <ApperIcon name="Building2" size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">PropSpot</h3>
              </div>
              <p className="text-surface-400 mb-6 max-w-md">
                Your trusted partner in finding the perfect property. 
                Connecting dreams with reality through innovative real estate solutions.
              </p>
              <div className="flex space-x-4">
                {["Facebook", "Twitter", "Instagram", "Linkedin"].map((social) => (
                  <button key={social} className="w-10 h-10 bg-surface-800 rounded-xl flex items-center justify-center hover:bg-primary transition-colors">
                    <ApperIcon name={social} size={20} />
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-surface-400">
                <li><a href="#" className="hover:text-white transition-colors">Buy Properties</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Rent Properties</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sell Property</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Find Agents</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-surface-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-surface-800 mt-8 pt-8 text-center text-surface-400">
            <p>&copy; 2024 PropSpot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home