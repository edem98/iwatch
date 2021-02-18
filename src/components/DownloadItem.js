import React from 'react'
import MovieCard from './MovieCard'
import styled from 'styled-components'
import video from '../videos/video.mp4'

export default function DownloadItem({film}) {
    return (
        <Container>
            <MovieCard 
                title={film.title} 
                isLarge={false}  
                poster={film.poster} 
                language={film.language}
                download={true}
            />
            <TitleAndSynopsis>
                <Title>{film.title}</Title>
                <Synopsis>{film.description}</Synopsis>
            </TitleAndSynopsis>
            <ButtonWrapper>
                <DownloadButton href={video} download>Telecharger</DownloadButton>
            </ButtonWrapper>
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    padding: 10px 20px 10px 30px; 
    justify-content: space-between;
`

const TitleAndSynopsis = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: flex-start;
`

const Title = styled.h3`
    color: white;
    text-align: left;
    margin-top: 20px;
    font-size: 30px;
`

const Synopsis = styled.p`
    color: white;
    text: align-left;
    margin-top: 20px;
`

const DownloadButton = styled.a`
    color: white;
    background-color: red;
    padding: 5px 15px 7px 15px;
    text-align: center;
    border-radius: 20px;
    text-decoration: none;
`

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    justify-content: center;
    padding: 0px 20px 0px 20px;
`