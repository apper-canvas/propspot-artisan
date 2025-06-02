import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'react-toastify'
import ApperIcon from './ApperIcon'

const MainFeature = () => {
  const [activeTab, setActiveTab] = useState('search')
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    propertyType: '',
    priceRange: { min: '', max: '' },
    bedrooms: '',
    bathrooms: ''
  })
  const [savedSearches, setSavedSearches] = useState([])
  const [properties, setProperties] = useState([])

  // Mock property data
  useEffect(() => {
    const mockProperties = [
      {
        id: 1,
        title: "Modern Downtown Apartment",
        price: 450000,
        propertyType: "Apartment",
        bedrooms: 2,
        bathrooms: 2,
        squareFootage: 1200,
        location: "Downtown",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
        amenities: ["Gym", "Pool", "Parking"],
        status: "For Sale"
      },
      {
        id: 2,
        title: "Luxury Family House",
        price: 750000,
        propertyType: "House",
        bedrooms: 4,
        bathrooms: 3,
        squareFootage: 2800,
        location: "Suburbs",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
        amenities: ["Garden", "Garage", "Fireplace"],
        status: "For Sale"
      },
      {
        id: 3,
        title: "Cozy Studio Loft",
        price: 2200,
        propertyType: "Studio",
        bedrooms: 1,
        bathrooms: 1,
        squareFootage: 600,
        location: "Arts District",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
        amenities: ["High Ceilings", "Exposed Brick"],
        status: "For Rent"
      },
      {
        id: 4,
        title: "Waterfront Condo",
        price: 620000,
        propertyType: "Condo",
        bedrooms: 3,
        bathrooms: 2,
        squareFootage: 1600,
        location: "Marina",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
        amenities: ["Balcony", "Water View", "Pool"],
        status: "For Sale"
      }
    ]
    setProperties(mockProperties)
  }, [])

  const handleFilterChange = (field, value) => {
    if (field === 'priceRange') {
      setSearchFilters(prev => ({
        ...prev,
        priceRange: { ...prev.priceRange, ...value }
      }))
    } else {
      setSearchFilters(prev => ({
        ...prev,
        [field]: value
      }))
    }
  }

  const handleSearch = () => {
    let filtered = properties

    if (searchFilters.location) {
      filtered = filtered.filter(prop => 
        prop.location.toLowerCase().includes(searchFilters.location.toLowerCase())
      )
    }

    if (searchFilters.propertyType) {
      filtered = filtered.filter(prop => prop.propertyType === searchFilters.propertyType)
    }

    if (searchFilters.bedrooms) {
      filtered = filtered.filter(prop => prop.bedrooms >= parseInt(searchFilters.bedrooms))
    }

    if (searchFilters.bathrooms) {
      filtered = filtered.filter(prop => prop.bathrooms >= parseInt(searchFilters.bathrooms))
    }

    if (searchFilters.priceRange.min || searchFilters.priceRange.max) {
      filtered = filtered.filter(prop => {
        const price = prop.price
        const min = searchFilters.priceRange.min ? parseInt(searchFilters.priceRange.min) : 0
        const max = searchFilters.priceRange.max ? parseInt(searchFilters.priceRange.max) : Infinity
        return price >= min && price <= max
      })
    }

    setProperties(filtered)
    toast.success(`Found ${filtered.length} properties matching your criteria`)
  }

  const saveSearch = () => {
    const searchQuery = {
      id: Date.now(),
      name: `Search ${savedSearches.length + 1}`,
      filters: { ...searchFilters },
      createdAt: new Date().toLocaleDateString()
    }
    setSavedSearches(prev => [...prev, searchQuery])
    toast.success('Search saved successfully!')
  }

  const loadSavedSearch = (search) => {
    setSearchFilters(search.filters)
    toast.info('Search filters loaded')
  }

  const deleteSavedSearch = (id) => {
    setSavedSearches(prev => prev.filter(search => search.id !== id))
    toast.success('Saved search deleted')
  }

  const resetFilters = () => {
    setSearchFilters({
      location: '',
      propertyType: '',
      priceRange: { min: '', max: '' },
      bedrooms: '',
      bathrooms: ''
    })
    // Reset to original properties
    const mockProperties = [
      {
        id: 1,
        title: "Modern Downtown Apartment",
        price: 450000,
        propertyType: "Apartment",
        bedrooms: 2,
        bathrooms: 2,
        squareFootage: 1200,
        location: "Downtown",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
        amenities: ["Gym", "Pool", "Parking"],
        status: "For Sale"
      },
      {
        id: 2,
        title: "Luxury Family House",
        price: 750000,
        propertyType: "House",
        bedrooms: 4,
        bathrooms: 3,
        squareFootage: 2800,
        location: "Suburbs",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
        amenities: ["Garden", "Garage", "Fireplace"],
        status: "For Sale"
      },
      {
        id: 3,
        title: "Cozy Studio Loft",
        price: 2200,
        propertyType: "Studio",
        bedrooms: 1,
        bathrooms: 1,
        squareFootage: 600,
        location: "Arts District",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
        amenities: ["High Ceilings", "Exposed Brick"],
        status: "For Rent"
      },
      {
        id: 4,
        title: "Waterfront Condo",
        price: 620000,
        propertyType: "Condo",
        bedrooms: 3,
        bathrooms: 2,
        squareFootage: 1600,
        location: "Marina",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
        amenities: ["Balcony", "Water View", "Pool"],
        status: "For Sale"
      }
    ]
    setProperties(mockProperties)
    toast.info('Filters reset')
  }

  const formatPrice = (price, status) => {
    if (status === "For Rent") {
      return `$${price.toLocaleString()}/month`
    }
    return `$${price.toLocaleString()}`
  }

  return (
    <motion.section 
      className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 sm:mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-soft border border-surface-200">
            {[
              { id: 'search', label: 'Search Properties', icon: 'Search' },
              { id: 'saved', label: 'Saved Searches', icon: 'Bookmark' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 sm:px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-card'
                    : 'text-surface-600 hover:text-primary hover:bg-surface-50'
                }`}
              >
                <ApperIcon name={tab.icon} size={20} />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'search' && (
            <motion.div
              key="search"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Search Filters */}
              <div className="filter-card">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-surface-900 mb-4 sm:mb-0">
                    Find Your Perfect Property
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={handleSearch}
                      className="btn-primary flex items-center space-x-2"
                    >
                      <ApperIcon name="Search" size={20} />
                      <span>Search</span>
                    </button>
                    <button
                      onClick={saveSearch}
                      className="btn-secondary flex items-center space-x-2"
                    >
                      <ApperIcon name="Bookmark" size={20} />
                      <span className="hidden sm:inline">Save</span>
                    </button>
                    <button
                      onClick={resetFilters}
                      className="px-4 py-3 border border-surface-300 rounded-xl text-surface-600 hover:bg-surface-50 transition-colors flex items-center space-x-2"
                    >
                      <ApperIcon name="RotateCcw" size={20} />
                      <span className="hidden sm:inline">Reset</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-surface-700">Location</label>
                    <input
                      type="text"
                      placeholder="Enter city or area"
                      value={searchFilters.location}
                      onChange={(e) => handleFilterChange('location', e.target.value)}
                      className="input-field"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-surface-700">Property Type</label>
                    <select
                      value={searchFilters.propertyType}
                      onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                      className="input-field"
                    >
                      <option value="">All Types</option>
                      <option value="House">House</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Condo">Condo</option>
                      <option value="Studio">Studio</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-surface-700">Min Price</label>
                    <input
                      type="number"
                      placeholder="Min price"
                      value={searchFilters.priceRange.min}
                      onChange={(e) => handleFilterChange('priceRange', { min: e.target.value })}
                      className="input-field"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-surface-700">Max Price</label>
                    <input
                      type="number"
                      placeholder="Max price"
                      value={searchFilters.priceRange.max}
                      onChange={(e) => handleFilterChange('priceRange', { max: e.target.value })}
                      className="input-field"
                    />
                  </div>

                  <div className="sm:col-span-2 lg:col-span-1 xl:col-span-1 space-y-2">
                    <label className="text-sm font-medium text-surface-700">Bedrooms</label>
                    <select
                      value={searchFilters.bedrooms}
                      onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                      className="input-field"
                    >
                      <option value="">Any</option>
                      <option value="1">1+</option>
                      <option value="2">2+</option>
                      <option value="3">3+</option>
                      <option value="4">4+</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Properties Grid */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-surface-900">
                    {properties.length} Properties Found
                  </h4>
                  <div className="flex items-center space-x-2 text-sm text-surface-600">
                    <ApperIcon name="Filter" size={16} />
                    <span>Sort by: Newest</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {properties.map((property, index) => (
                    <motion.div
                      key={property.id}
                      className="property-card group cursor-pointer"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={property.image}
                          alt={property.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className={`property-badge ${
                            property.status === 'For Sale' 
                              ? 'bg-primary text-white' 
                              : 'bg-secondary text-white'
                          }`}>
                            {property.status}
                          </span>
                        </div>
                        <button className="absolute top-4 right-4 w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300">
                          <ApperIcon name="Heart" size={16} className="text-surface-600" />
                        </button>
                      </div>

                      <div className="p-4 sm:p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h5 className="font-semibold text-surface-900 text-sm sm:text-base leading-tight">
                            {property.title}
                          </h5>
                          <span className="text-lg sm:text-xl font-bold text-primary ml-2">
                            {formatPrice(property.price, property.status)}
                          </span>
                        </div>

                        <div className="flex items-center text-surface-600 mb-4 text-sm">
                          <ApperIcon name="MapPin" size={14} className="mr-1" />
                          <span>{property.location}</span>
                        </div>

                        <div className="flex items-center justify-between text-sm text-surface-600 mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <ApperIcon name="Bed" size={14} />
                              <span>{property.bedrooms}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <ApperIcon name="Bath" size={14} />
                              <span>{property.bathrooms}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <ApperIcon name="Maximize" size={14} />
                              <span>{property.squareFootage} sq ft</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {property.amenities.slice(0, 2).map((amenity, idx) => (
                            <span key={idx} className="text-xs bg-surface-100 text-surface-600 px-2 py-1 rounded-full">
                              {amenity}
                            </span>
                          ))}
                          {property.amenities.length > 2 && (
                            <span className="text-xs bg-surface-100 text-surface-600 px-2 py-1 rounded-full">
                              +{property.amenities.length - 2} more
                            </span>
                          )}
                        </div>

                        <button className="w-full py-2 border border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-300 text-sm font-medium">
                          View Details
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'saved' && (
            <motion.div
              key="saved"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="filter-card">
                <h3 className="text-xl sm:text-2xl font-bold text-surface-900 mb-6">
                  Your Saved Searches
                </h3>

                {savedSearches.length === 0 ? (
                  <div className="text-center py-8 sm:py-12">
                    <div className="w-16 h-16 bg-surface-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ApperIcon name="Bookmark" size={32} className="text-surface-400" />
                    </div>
                    <p className="text-surface-600 mb-4">No saved searches yet</p>
                    <button
                      onClick={() => setActiveTab('search')}
                      className="btn-primary"
                    >
                      Create Your First Search
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {savedSearches.map((search) => (
                      <motion.div
                        key={search.id}
                        className="bg-surface-50 rounded-xl p-4 sm:p-6 border border-surface-200 hover:shadow-card transition-shadow duration-300"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <h4 className="font-semibold text-surface-900">{search.name}</h4>
                          <button
                            onClick={() => deleteSavedSearch(search.id)}
                            className="text-surface-400 hover:text-red-500 transition-colors"
                          >
                            <ApperIcon name="Trash2" size={16} />
                          </button>
                        </div>

                        <div className="space-y-2 text-sm text-surface-600 mb-4">
                          {search.filters.location && (
                            <div>Location: {search.filters.location}</div>
                          )}
                          {search.filters.propertyType && (
                            <div>Type: {search.filters.propertyType}</div>
                          )}
                          {(search.filters.priceRange.min || search.filters.priceRange.max) && (
                            <div>
                              Price: {search.filters.priceRange.min || '0'} - {search.filters.priceRange.max || '∞'}
                            </div>
                          )}
                          <div className="text-xs text-surface-500">
                            Created: {search.createdAt}
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            loadSavedSearch(search)
                            setActiveTab('search')
                          }}
                          className="w-full py-2 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors text-sm font-medium"
                        >
                          Load Search
                        </button>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  )
}

export default MainFeature