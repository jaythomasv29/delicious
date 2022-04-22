import React, { useEffect, useState } from 'react'
import Category from '../components/Category';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom'

function Cuisine() {
    const [cuisineFoods, setCuisineFoods] = useState([])
    let params = useParams();

    const getCuisine = async (name) => {
        let API_KEY = process.env.REACT_APP_API_KEY
        try {
            console.log(API_KEY)

            const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${name}&number=10`)
            const data = await response.json()
            setCuisineFoods(data.results)
            localStorage.setItem('cuisine', JSON.stringify(data.results))

        } catch (e) {
            console.log(e.error)
        }

    }
    useEffect(() => {
        console.log('getting new data');
        getCuisine(params.type)

    }, [params.type])


    console.log(cuisineFoods)
    return (
        <>
            <Category />
            <Grid>
                {cuisineFoods && cuisineFoods.map((foodItem) => {
                    if (foodItem.image) {
                        return <Card key={foodItem.id}>
                            <img src={foodItem.image} alt={foodItem.title} />
                            <h4>{foodItem.title}</h4>
                        </Card>

                    }
                })}
            </Grid>
        </>
    )
}

const Grid = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 1rem;
`

const Card = styled.div`
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