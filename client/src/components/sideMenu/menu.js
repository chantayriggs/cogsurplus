import React, { useContext } from 'react'
import { StateContext } from "../../context/stateContext"

const Menu = () => {

    const stateContext = useContext(StateContext)

    return (
        <div className={stateContext.showSideMenu ? "side-menu open" : "side-menu"}>
            menu
        </div>
    )
}

export default Menu