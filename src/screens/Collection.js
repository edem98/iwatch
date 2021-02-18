import React from 'react'
import styled from 'styled-components'
import Title from '../components/Title'
import photo1 from '../images/photo1.jpg'
import photo2 from '../images/photo2.jpg'
import ds from '../images/demon-slayer.jpg'
import DownloadItem from '../components/DownloadItem'

const items = [
    {
		id: 1,
		title: 'Suicide Squad',
		poster: photo1,
        description: "Face à une menace aussi énigmatique qu'invincible, l'agent secret Amanda Waller réunit une armada de crapules de la pire espèce. Armés jusqu'aux dents par le gouvernement, ces Super-Méchants s'embarquent alors pour une mission-suicide. Jusqu'au moment où ils comprennent qu'ils ont été sacrifiés.",
		language: 'VOSTFR',
        type: 'film'
	},
	{
		id: 2,
		title: 'Joker',
		poster: photo2,
        description: "L'histoire se déroule en 1981, à Gotham City. Arthur Fleck travaille dans une agence de clowns. ... Dans cette société décadente, Arthur bascule peu à peu dans la folie et finit par devenir le Joker, un dangereux tueur psychopathe victime d'hallucinations et le plus grand criminel de Gotham City.",
		language: 'VOSTFR',
        type: 'film'
	},
    {
		id: 3,
		title: 'Demon Slayer',
		poster: ds,
        description: "L'histoire se déroule en 1981, à Gotham City. Arthur Fleck travaille dans une agence de clowns. ... Dans cette société décadente, Arthur bascule peu à peu dans la folie et finit par devenir le Joker, un dangereux tueur psychopathe victime d'hallucinations et le plus grand criminel de Gotham City.",
		language: 'VOSTFR', 
        type: 'film'
	},
]

export default function Collection() {
    return (
        <Container>
            <Title title="Nouveau" /> 
            {items.map(film => (
                <DownloadItem film={film} />
            ))}
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #1c1c1c;
    padding-bottom: 50px;
`