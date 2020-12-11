import React, { useContext } from 'react'
import { StateContext } from "../../context/stateContext"

const MenuBackdrop = () => {

    const stateContext = useContext(StateContext)

    return (
        <div onClick={ () => stateContext.setShowSideMenu(false)} className="menu-backdrop"></div>
    )
}

export default MenuBackdrop