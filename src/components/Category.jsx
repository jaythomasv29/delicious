import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiChopsticks, GiNoodles, GiSushis } from 'react-icons/gi'

import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

import React from 'react'

function Category() {
    return (
        <CategoryWrapper>
            <FoodLink to={'/cuisine/italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </FoodLink>
            <FoodLink to={'/cuisine/american'}>
                <FaHamburger />
                <h4>American</h4>
            </FoodLink>
            <FoodLink to={'/cuisine/thai'}>
                <GiNoodles />
                <h4>Thai</h4>
            </FoodLink>
            <FoodLink to={'/cuisine/chinese'}>
                <GiChopsticks />
                <h4>Chinese</h4>
            </FoodLink>
            <FoodLink to={'/cuisine/japanese'}>
                <GiSushis />
                <h4>Japanese</h4>
            </FoodLink>
            <FoodLink to={'/cuisine/indian'}>
                <FaPizzaSlice />
                <h4>Indian</h4>
            </FoodLink>
        </CategoryWrapper>

    )
}

const CategoryWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const FoodLink = styled(NavLink)`
    color: #ffffff;
    margin: 15px;
    border-radius: 40%;
    border: 1px solid black;
    width: 75px;
    height: 75px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    background-color: #444444;
    text-align: center;
    text-decoration: none;
    cursor: pointer;  
    svg {
        font-size: 25px;
        color: white;
    }

    &:hover {
        transform: scale(1.2);
        transition: 500ms ease-in-out;
    }

    &.active {
        background: linear-gradient(to right, #f27121, #e94057);
        border: none;
    }
`

export default Category