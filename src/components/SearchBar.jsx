import React from 'react'
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
function SearchBar() {
    const navigate = useNavigate()
    const [searchValue, setSearchValue] = useState('');



    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        // navigate sends to <SearchedRecipe />
        navigate(`/searched/${searchValue}`)
    }
    return (
        <div>
            <FormStyle onSubmit={submitHandler}>
                <div>
                    <FaSearch />
                <input type="text" onChange={handleChange} placeholder='Lets try a Pasta Carbonara recipe...'/>
                    <button type='submit'>Search</button>
                </div>
                
            </FormStyle>
        </div>
    )
}

const FormStyle = styled.form`
    text-align: center;
    position: relative;
    width: 100%;

    input {
        /* border: none; */
        /* background: linear-gradient(35deg, #494949, #313131); */
        background: whitesmoke;
        
        font-size: 1.25rem;
        color: black;
        padding: 1rem 3rem;
        border: 0.5px solid lightgray;
        border-radius: 1rem 0 0 1rem;
        outline: none;
        width: 70%;
        
        &::placeholder {
            color: gray;
        }
    }

    button {
        color: white;
        font-size: 1.25rem;
        padding: 1rem 3rem;
        border: 0.5px solid lightgray;
        border-left: none;
        border-radius: 0 1rem 1rem 0;
        /* border-radius: 1rem; */
        background: #9a9a9a;
        
    }

    svg {
        position: absolute;
        top: 50%;
        transform: translate(100%, -50%);
        color: gray;

    }
`

export default SearchBar