import React, { useEffect, useContext } from 'react';
import { StateContext } from "../context/stateContext"

const SaleDetail = () => {

    const stateContext = useContext(StateContext)

    useEffect( () => {
        console.log(stateContext.currentSale)
    },[])


    return (
        <div>
            {
                stateContext.allProducts.map( product => (
                    <div>
                        {
                            product.sale === stateContext.currentSale ? <div>{product.name}</div> : null
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default SaleDetail;