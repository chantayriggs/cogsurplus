import React, { useEffect, useContext } from 'react'
import { StateContext } from "../../context/stateContext"

const SlideCart = () => {

    const stateContext = useContext(StateContext)


    return (
        <div className={stateContext.showCart ? "side-cart open" : "side-cart"}>
            <div className="cart-wrapper">
                <div className="cart-header-wrapper">
                    <div className="cart-header">
                        <div>cart</div>
                        <div onClick={ () => stateContext.setShowCart(false)}>
                            <i class="fas fa-times"></i>
                        </div>
                    </div>
                </div>
                <div className="cart-content">
                        { stateContext.cartItems.length === 0 ? 
                            <div className="empty-cart">
                                your cart is empty
                            </div> 
                            
                            
                            
                            :

                            <div>

                            </div>
                        }
                </div>
                <div className="bubble-wrapper">
                    <div className="bubble">
                        <i class="fas fa-gift"></i>
                        
                        <div className="bubble-description">add gift wrap</div>
                    </div>
                    <div className="bubble">
                        <i class="far fa-envelope"></i>
                        <div className="bubble-description">add a card</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SlideCart