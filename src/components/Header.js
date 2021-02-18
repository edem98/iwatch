import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import styled from 'styled-components'
import StyledLink from './StyledLink'
import './styles.css'




export default function Header({selectCategory, options}) {

    const defaultOption = "";

    const onSelect = (choice) => {
        selectCategory(choice.value)
    }

    return (
        <>
            <HeaderWrapper>
                <Logo><StyledLink to='/'>Iwatch</StyledLink></Logo>
                <UserZone>
                    <Collection>
                        <Dropdown 
                            options={options} 
                            onChange={onSelect} 
                            value={defaultOption} 
                            placeholder="Catégories" 
                            controlClassName='dropdown'
                            arrowClassName='dropdown-arrow'
                        />
                    </Collection>
                    <Collection>
                        <StyledLink to='/downloads' >Téléchargements</StyledLink>   
                    </Collection>
                    <Avatar src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt=""/>
                </UserZone>
            </HeaderWrapper>
        </>
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