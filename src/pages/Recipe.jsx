import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

function Recipe() {
    const params = useParams()
    const [recipeData, setRecipeData] = useState({})
    const [activeTab, setActiveTab] = useState('instructions')

    useEffect(() => {
        const getRecipeData = async (id) => {
            try {
                const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=cab583a1414b47148062586b8ced947e
                `)
                const data = await response.json()
                console.log(data)
                setRecipeData(data)
            } catch (e) {
                console.log(e.error)
            }
        }

        getRecipeData(params.id)
    }, [])
    return (
        <DetailWrapper>
            <div>
                <h2>{recipeData.title}</h2>
                <img src={recipeData.image} alt={recipeData.title} />
            </div>
            <InfoDiv>
                <Button className={activeTab === 'summary' ? 'active' : ''} onClick={() => setActiveTab('summary')}>Summary</Button>
                <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
                <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>

            </InfoDiv>
            <InfoDiv>
                <div>
                    {
                        activeTab === 'summary' &&
                        <h3 dangerouslySetInnerHTML={{ __html: recipeData.summary }}></h3>
                    }
                    {
                        activeTab === 'instructions' &&
                        <h3 dangerouslySetInnerHTML={{ __html: recipeData.instructions }}></h3>

                    }
                </div>
                <ul>

                    {(activeTab === 'ingredients') && recipeData.extendedIngredients.map(ingredient => {
                        return <li key={ingredient.id}>{ingredient.original}</li>
                    })
                    }
                </ul>
            </InfoDiv>
        </DetailWrapper>
    )
}


const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        
    }
    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
    h2 {
        margin-bottom: 2rem;
    }

    li {
        font-size: 1.2rem;
        line-height: 2.5rem;
    }

    ul, p, h3 {
        margin-top: 2rem;
        font-weight: 300;
        line-height: 2rem;
    }
`

const Button = styled.button`
        padding: 1rem 2rem;
        color: #313131;
        background: white;
        border: 2px solid black;
        margin-right: 2rem;
        font-weight: 600;
        cursor: pointer;

        &:hover {
            transform: scale(1.1);
            transition: 600ms ease-in-out;
        }
    `

const InfoDiv = styled.div`
        margin-top: 2rem;
        
    `

export default Recipe