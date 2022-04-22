import React from 'react'
import Category from '../components/Category'
import Featured from '../components/Featured'
import Popular from '../components/Popular'
import SearchBar from '../components/SearchBar'

function Home() {
  return (
    <div>
      <SearchBar />
      <Category />
      <Featured />
      <Popular />
    </div>
  )
}

export default Home