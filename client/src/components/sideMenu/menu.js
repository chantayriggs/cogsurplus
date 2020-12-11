import React, { useEffect, useContext } from 'react'
import { StateContext } from "../../context/stateContext"

const Menu = () => {

    const stateContext = useContext(StateContext)

    useEffect( () => {
        console.log(stateContext.showSideMenu)
    }, [])

    return (
        <div className={stateContext.showSideMenu ? "side-menu open" : "side-menu"}>
            menu
        </div>
    )
}

export default Menu