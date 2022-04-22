import React from 'react'
import Category from '../components/Category'
import Featured from '../components/Featured'
import Popular from '../components/Popular'

function Home() {
  return (
    <div>
      <Category />
      <Featured />
      <Popular />
    </div>
  )
}

export default Home