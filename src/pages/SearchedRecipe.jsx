import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams, useNavigate } from 'react-router-dom'
function SearchedRecipe() {
  const params = useParams()
  const navigate = useNavigate()
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const getSearched = async (name) => {
      const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${params.search}&number=10`)
      const data = await response.json()
      console.log(data.results)
      setRecipes(data.results)
    }
    getSearched()
  }, [params.search])

  const navigateToId = (id) => {
    navigate(`/recipe/${id}`)
  }
  return (
    <Grid>{
      recipes.map(recipe => {
        return <Card key={recipe.id} onClick={() => navigateToId(recipe.id)}>
          <img src={recipe.image} alt={recipe.title}/>
          <h4>{recipe.title}e</h4>
        </Card>
      })
      }</Grid>
  )
}


const Grid = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 1rem;
    
`

const Card = styled.div`
    cursor: pointer;
    
    img {
        width: 100%;
        object-fit: cover;
        border-radius: 3rem;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }
`


export default SearchedRecipe