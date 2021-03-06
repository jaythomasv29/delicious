import React, { useEffect, useState } from 'react'

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom'

function Cuisine() {
    const [cuisineFoods, setCuisineFoods] = useState([])
    let params = useParams();
    const navigate = useNavigate();

    const getCuisine = async (name) => {

        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=cab583a1414b47148062586b8ced947e&cuisine=${name}&number=10`)
            const data = await response.json()
            setCuisineFoods(data.results)
            localStorage.setItem(params.type, JSON.stringify(data.results))

        } catch (e) {
            console.log(e.error)
        }

    }
    useEffect(() => {
        console.log('getting data from localStorage');
        if(JSON.parse(localStorage.getItem(params.type))) {
            
            setCuisineFoods(JSON.parse(localStorage.getItem(params.type)))
        } else {
            console.log('getting new data');
            getCuisine(params.type)
        }

    }, [params.type])


    console.log(cuisineFoods)
    return (
        <>
            <Grid 
                animate={{ opacity: 1}}
                initial={{ opacity: 0}}
                transition={{ duration: 0.5 }}
            
            >
                {cuisineFoods && cuisineFoods.map((recipe) => {
                    if (recipe.image) {
                        return <Card key={recipe.id} onClick={() => navigate(`/recipe/${recipe.id}`)}>
                            <img src={recipe.image} alt={recipe.title} />
                            <h4>{recipe.title}</h4>
                        </Card>

                    }
                })}
            </Grid>
        </>
    )
}

const Grid = styled(motion.div)`
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 1rem;
`

const Card = styled.div`
    cursor: pointer;
    img {
        width: 100%;
        border-radius: 2rem;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }
`

export default Cuisine