import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ApperIcon from '../components/ApperIcon'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="mb-8"
        >
          <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
            <ApperIcon name="Home" size={48} className="text-white" />
          </div>
          <h1 className="text-6xl font-bold text-surface-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-surface-700 mb-4">Property Not Found</h2>
          <p className="text-surface-600 mb-8">
            The property you're looking for seems to have moved to a new neighborhood. 
            Let's get you back to exploring our available listings.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Link
            to="/"
            className="inline-flex items-center space-x-2 btn-primary"
          >
            <ApperIcon name="ArrowLeft" size={20} />
            <span>Back to Properties</span>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound