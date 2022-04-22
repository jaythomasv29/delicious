import React from 'react'

import {useParams} from 'react-router-dom'
function SearchedRecipe() {

  const params = useParams()
  return (
    <div>{params.search}</div>
  )
}

export default SearchedRecipe