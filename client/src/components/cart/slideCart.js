import React, { useEffect, useContext } from 'react'
import { StateContext } from "../../context/stateContext"

const SlideCart = () => {

    const stateContext = useContext(StateContext)

    useEffect( () => {
        console.log(stateContext.showCart)
    }, [])

    return (
        <div className={stateContext.showCart ? "side-cart open" : "side-cart"}>
            slide
        </div>
    )
}

export default SlideCart