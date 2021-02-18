import React from 'react';
import styled from 'styled-components'
import StyledLink from './StyledLink'
import {  BrowserRouter as Router, Link} from 'react-router-dom'

const Pagination = ({ cardsPerPage, totalCards, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Router>
        <ContainerNav>
      <ListWrapper>
      { currentPage > 1 && <BackArrow onClick={() => paginate(currentPage-1)}>Précedent</BackArrow>}
        {pageNumbers.map(number => (
          <ListElement key={number} active={number === currentPage}>
            <PaginateItem onClick={() => paginate(number)} href='!#' active={number === currentPage} >
              {number}
            </PaginateItem>
          </ListElement>
        ))}
        { currentPage < Math.ceil(totalCards / cardsPerPage) && <FrontArrow onClick={() => paginate(currentPage+1)}>Suivant</FrontArrow>}
      </ListWrapper>
    </ContainerNav>
    </Router>
  );
};

export default Pagination;

const ContainerNav = styled.nav`
    height:36px;
    margin-top: 2em;
    padding: 0;
`

const ListWrapper = styled.ul`
    padding:0;
    display:inline-block;
    margin-bottom:0;
    border-radius:3px;
    box-shadow:0 1px 2px rgba(0,0,0,.05);
    display: flex;
`

const ListElement = styled.li`
    display:inline;
    padding: 5px;
    border: ${props => props.active ? '1px solid white' : '1px solid red'};;
    margin: 5px 2px 5px 2px;
    border-radius: 2px;
    width: 25px;

    &:hover {
        border: 1px solid white;
        color: red;
        transform: scale(1.05);
        transition: all ease 700ms;
    }

    &:active {
        border: 1px solid white;
    }
`

const BackArrow = styled(Link)`
    text-decoration: none;
    color: white;
    display: flex;
    font-size: 13px;
    justify-content: ${props => props.tempLeftProp ? 'flex-start' : 'center'};
    align-items: center;
    margin-right: 15px;
    &:before {
        content: "<< ";
        margin-right: 5px;
      }
`;

const FrontArrow = styled(Link)`
    text-decoration: none;
    color: white;
    display: flex;
    font-size: 13px;
    justify-content: ${props => props.tempLeftProp ? 'flex-start' : 'center'};
    align-items: center;
    margin-left: 15px;
    &:after {
        content: " >>";
        margin-left: 5px;
      }
`;

const PaginateItem = styled(Link)`
  text-decoration: none;
  color: ${props => props.active ? 'red' : 'white'};
  display: flex;
  font-size: 13px;
  justify-content: ${props => props.tempLeftProp ? 'flex-start' : 'center'};
  align-items: center;
`;
