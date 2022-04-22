import React from 'react'
import Home from './Home'
import { Routes, Route } from 'react-router-dom'
import Cuisine from './Cuisine'
import SearchedRecipe from './SearchedRecipe'

function Pages() {
  return (
    
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='cuisine/:type' element={<Cuisine />} />
        <Route path='/searched/:search' element={<SearchedRecipe />} />
      </Routes>
    
  )
}

export default Pages