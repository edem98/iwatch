import React from 'react'
import MovieCard from './MovieCard'
import styled from 'styled-components'

const Listing = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	padding: 0px 50px 0px 50px;
`;

const Empty = styled.h3`
	color: white;
	font-size: 20px;
	margin-top: 2em;
`

export default function CardContainer({items, handleClick}) {
	if(items.length > 0){
		return (
			<Listing>
					{items.map((film, index) => (
						<MovieCard key={index} 
							title={film.title} 
							isLarge={false}  
							poster={film.poster} 
							language={film.language}
							show={handleClick}
						/>))}
				</Listing> 
		)
	}
	else{
		return (
			<Listing>
				<Empty>Aucun élémemt disponible</Empty>
			</Listing>	
		)
	}
    
}
