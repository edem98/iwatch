import React from 'react'
import styled from 'styled-components'
import Portal from './Portal'

export default function Modal({children, on, toggle, resetTrailer}) {

    const resetAndToggle = () => {
        resetTrailer();
        toggle();
    }

    return (
        <Portal>
            {on && (
            <ModalWrapper>
                <ModalCard>
                <div>{children}</div>
                <CloseButton onClick={resetAndToggle}>X</CloseButton>
                </ModalCard>
                <Background onClick={resetAndToggle} />
            </ModalWrapper>
            )}
        </Portal>
    )
}


const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalCard = styled.div`
    position: relative;
    background-color: white;
    border-radius: 5px;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.9);
    padding: 5px;
    z-index: 5;
    min-width: 400px;
`

const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    color: #fff;
    background-color: black;
    padding: 2px;
    border: 1px solid white;
    height: 20px;
    width: 20px;
    border-radius: 5px;
`

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.9);
    z-index: 4;
`