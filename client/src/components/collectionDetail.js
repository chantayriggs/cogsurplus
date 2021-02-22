import React, { useEffect, useContext } from 'react';
import { StateContext } from "../context/stateContext"

const CollectionDetail = props => {

    const stateContext = useContext(StateContext)

    useEffect( () => {
        console.log(stateContext.currentType)
    }, [])

    return (
        <div>
            {
                stateContext.allProducts.map( product => (
                    <div>
                        {
                            product.collection.type === stateContext.currentType ? <div>{product.name}</div> : null
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default CollectionDetail;