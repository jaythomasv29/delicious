import React from 'react'
import { motion } from 'framer-motion'
import Featured from '../components/Featured'
import Popular from '../components/Popular'


function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Featured />
      <Popular />
    </motion.div>
  )
}

export default Home