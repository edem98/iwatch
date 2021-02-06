import React, {useState} from 'react'
import movieTrailer from 'movie-trailer'
import Toggle from '../components/Toggle'
import Modal from '../components/Modal'
import YouTube from 'react-youtube'
import Hero from '../components/Hero'
import styled from 'styled-components'
import SearchField from '../components/SearchField'
import MovieCard from '../components/MovieCard'
import photo1 from '../images/photo1.jpg'
import photo2 from '../images/photo2.jpg'
import photo3 from '../images/photo3.jpg'
import photo4 from '../images/photo4.jpg'
import photo5 from '../images/photo5.jpg'
import photo6 from '../images/photo6.jpg'

const films = [
	{
		id: 1,
		title: 'Suicide Squad',
		poster: photo1,
		language: 'VOSTFR'
	},
	{
		id: 2,
		title: 'Joker',
		poster: photo2,
		language: 'VOSTFR'
	},
	{
		id: 3,
		title: 'Jupiter Ascending',
		poster: photo3,
		language: 'VOSTFR'
	},
	{
		id: 4,
		title: 'Red Sonja',
		poster: photo4,
		language: 'VOSTFR'
	},
	{
		id: 5,
		title: 'The Kingdom Of The Cristal Skull',
		poster: photo5,
		language: 'VOSTFR'
	},
	{
		id: 6,
		title: 'Pride Prejudice Zombies',
		poster: photo6,
		language: 'VOSTFR'
	},
]

export default function Home() {

	const [trailerUrl, setTrailerUrl] = useState("");

	const opts = {
        height: "390",
        width: "100%",
        playVars: {
        autoplay: 1,
        },
	};

	
	
	const handleClick = (title) => {
        if (trailerUrl) {
        setTrailerUrl("");
        } else {
        movieTrailer(title || "")
            .then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
            })
            .catch((err) => {
            console.log(err);
            });
        }
    };


	return (
		<Container>
			<Hero />
			<SearchField />
			<Title>Films</Title>
			<Divider />
			<Listing>
				{films.map((film, index) => (
					<MovieCard key={index} 
						title={film.title} 
						isLarge={false}  
						poster={film.poster} 
						language={film.language}
						show={handleClick}
					/>))}
			</Listing> 
			<BottomSpacer />
			{trailerUrl && ( 
				<Toggle>
					{({on,toggle}) => (
						<Modal on={on} toggle={toggle} resetTrailer={() => setTrailerUrl("")}> 
							<YouTube videoId={trailerUrl} opts={opts} />
						</Modal>
					)}
				</Toggle> )
			}
		</Container>
	);
}

const Container = styled.div`
	background-color: #1c1c1c;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Listing = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	padding: 0px 50px 0px 50px;
`;

const Title = styled.h2`
	color: white;
	text-align: center;
	margin-top: 50px;
	font-size: 30px;
	font-family: Bisonbold;
`;

const Divider = styled.div`
    height: 2px;
    width: 30px;
	background-color: red; 
	margin-top: 5px;
	margin-bottom: 10px;
`

const BottomSpacer = styled.div`
	margin-top: 50px;
`