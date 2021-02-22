import React, { useEffect, useContext } from 'react';
import { StateContext } from "../context/stateContext"

const DisciplineDetail = () => {

    const stateContext = useContext(StateContext)


    return (
        <div>
            {
                stateContext.allProducts.map( product => (
                    <div>
                        {
                            product.discipline === stateContext.currentDiscipline ? <div>{product.name}</div> : null
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default DisciplineDetail;