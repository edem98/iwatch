import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

const portalRoot = document.getElementById('portal')

const Portal = ({children}) => {

    var el = document.createElement('div')

    useEffect(() => {
        portalRoot.appendChild(el)
        return () => { portalRoot.removeChild(el) }
    },[])

    return ReactDOM.createPortal(children, el)
}

export default Portal