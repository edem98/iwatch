import React, {useState} from 'react'
import styled from 'styled-components'
import {SearchAlt} from '@styled-icons/boxicons-regular/SearchAlt';

export default function SearchField({searchQuery}) {

    const [query, setQuery] = useState("")

    const sendQuery = (e) => {
        setQuery(e.target.value)
        searchQuery(query);
    }

    return (
        <Container>
            <SearchInput onChange={sendQuery}  value={query} />
            <CustomSearchIcon />
        </Container>
    )
}

const Container = styled.div`
    width: 500px;
    height: 50px;
    background-color: #111111;
    display: flex;
    justify-content: center;
    align-item: center;
    margin-top: -25px;
    border: 2px solid #bb000e;
    border-radius: 30px;
`

const SearchInput = styled.input`
    width: 80%;
    padding: 5px 15px 5px 15px;
    background-color: #111111;
    outline: none;
    border: none;
    border-radius: 30px;
    color: white;
    font-size: 20px;
    font-family: helvetica;
`


const CustomSearchIcon = styled(SearchAlt)`
    color: white;
    width: 30px;
`;
