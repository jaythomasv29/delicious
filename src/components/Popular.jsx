import { useEffect, useState } from "react"
import styled from "styled-components"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useNavigate } from "react-router-dom";
import '@splidejs/react-splide/css';

function Popular() {
  const [popularRecipes, setPopularRecipes] = useState([])
  const navigate = useNavigate()

  // useEffect to run api call as soon as component gets mounted to get inital data
  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY
    const getPopular = async () => {
      const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&tags=asian&apiKey=cab583a1414b47148062586b8ced947e`)
      const data = await response.json()
      setPopularRecipes(data.recipes)  // set the data to state
      localStorage.setItem('popular', JSON.stringify(data.recipes))  // set localStorage to cache api data
    }
    // check cache to see if it exists
    const items = localStorage.getItem('popular')
    if(items) {
      setPopularRecipes(JSON.parse(items))  // parse data from localStorage that is stored in strings
    } else {  // if cache of API call DOES NOT EXIST , => get data
      console.log('fetching fresh API data');
      getPopular()
      
    }
  }, [])

  return (
    <div>


      <Wrapper>
        <h3>popular picks</h3>
        <Splide options={{
          perPage: 3,
          arrows: true,
          pagination: true,
          drag: 'free',
          gap: '2rem',
        }}aria-label="Popular Recipes">

          {
            popularRecipes.map((recipe) => {
              if (recipe.image) {
               return <SplideSlide key={recipe.id}>
                  <Card onClick={() => navigate(`/recipe/${recipe.id}`)}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                  </Card>
                </SplideSlide>
              }
            })
          }

        </Splide>
      </Wrapper>


    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`

const Card = styled.div`
  cursor: pointer;
  min-height: 30rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
    img {
      border-radius: 2rem;
      position: absolute;
      left: 0;
      width: 100%;
      height: 70%;
      object-fit: cover;
    }

    p {
      position: absolute;
      z-index: 10;
      left: 50%;
      bottom: 0%;
      transform: translate(-50%, 0%);
      color: grey;
      width: 100%;
      text-align: center;
      font-weight: 600;
      font-size: 0.9rem;
      height: 30%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
`
export default Popular