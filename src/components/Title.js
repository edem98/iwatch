import React from 'react'
import styled from 'styled-components'

export default function Title({title}) {
    return (
        <Wrapper>
            <Container>
                <Content>{title}</Content>
                <Underline />
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    height: 200px;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 50px 0px 50px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Content = styled.h1`
    color: white;
    text-align: left;
    font-family: Bisonbold;
    letter-spacing: 2px;
`

const Underline = styled.div`
    height: 1px;
    background-color: white;
    width: 100px;
`
