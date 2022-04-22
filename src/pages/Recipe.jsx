import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Recipe() {
    const params = useParams()
    const [recipeData, setRecipeData] = useState({})
    
    useEffect(() => {
        const getRecipeData = async (id) => {
            const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}
            `)
            const data = await response.json()
            console.log(data)
        }
        getRecipeData(params.name)
    }, [])
  return (
    <div>{params.name}</div>
  )
}

export default Recipe