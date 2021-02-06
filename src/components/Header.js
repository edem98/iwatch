import React from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import styled from 'styled-components'


const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: ${props => props.tempLeftProp ? 'flex-start' : 'center'};
  align-items: center;
`;

export default function Header() {
    return (
        <Router>
            <HeaderWrapper>
                <Logo><StyledLink>Iwatch</StyledLink></Logo>
                <UserZone>
                    <Collection>
                        <StyledLink>Catégories</StyledLink>
                    </Collection>
                    <Collection>
                        <StyledLink>Ma collection</StyledLink>   
                    </Collection>
                    <Avatar src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt=""/>
                </UserZone>
            </HeaderWrapper>
        </Router>
    )
}

const HeaderWrapper = styled.div`
    background-color: #111111;
    padding: 5px 15px 5px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
`

const Logo = styled.h2`
    color: white;
    font-family: Dashdemoozja;
    font-size: 25px;
`

const UserZone = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Avatar = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 35px;
`

const Collection = styled.span`
    color: white;
    margin-right: 20px;
    font-size: 15px;
`