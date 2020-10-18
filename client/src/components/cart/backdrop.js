import React, { useContext } from 'react'
import { StateContext } from "../../context/stateContext"

const Backdrop = () => {

    const stateContext = useContext(StateContext)

    return (
        <div onClick={ () => stateContext.setShowCart(false)} className="backdrop"></div>
    )
}

export default Backdrop