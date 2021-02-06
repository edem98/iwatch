import React from 'react'
import styled from 'styled-components'
import Deadpool from '../images/Deadpool.jpg'

export default function Hero() {
    return (
        <Container>
            <HeroImage src={Deadpool} alt='banner image' />
            <HeroText>Redecouvrez vos meilleurs classiques d'annimation et de cinéma</HeroText>
        </Container>
    )
}

const Container = styled.div`
    max-height: 500px;
    width: 100%;
`

const HeroImage = styled.img`
    object-fit: cover;
    width: 100%;
    max-height: 500px;
    z-index: 1px;
`

const HeroText = styled.p`
    font-family: Bisonbold;
    font-size: 50px;
    text-align: center;
    width: 500px;
    color: white;
    position: absolute;
    top: 170px;
    right: 40px;
    z-index: 2;
`