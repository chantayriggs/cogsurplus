import React, { useContext, useEffect } from 'react'
import { StateContext } from "../context/stateContext"

const CollectionDropdown = () => {

    const stateContext = useContext(StateContext)


    useEffect( () => {

    }, [])

    return (

        <div className="collection-menu-wrapper" onMouseLeave={() => stateContext.setShowCollectionDropdown(false)}>
            <div className="collection-menu">
            {
                stateContext.broadTypes.map( mapBroadType => (
                    <div className="menu-column" >
                        <div className="menu-header" >{mapBroadType}</div>
                        <div>
                            {
                                stateContext.collections.map( collection => (
                                    <div>
                                        { collection.broadType ===  mapBroadType ? 
                                        <div  className="menu-type"  >{collection.type}</div>
                                    
                                    : null}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
            <div>
                <img src="https://source.unsplash.com/random" />
            </div>
            </div>
        </div>
    )
}

export default CollectionDropdown