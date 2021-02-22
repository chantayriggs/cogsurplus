import React, { useContext, useEffect } from 'react'
import { Link } from "react-router-dom"
import { StateContext } from "../context/stateContext"

const CollectionDropdown = () => {

    const stateContext = useContext(StateContext)

    const handleTypeClick = type => {
        stateContext.setShowCollectionDropdown(false)
        stateContext.setCurrentType(type)
    }


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
                                    <Link 
                                        onClick={() => handleTypeClick(collection.type)}  
                                        className="menu-type" 
                                        to={`/collection/${(collection.type).toLowerCase().replace(" ", "-")}`}
                                    >{collection.type}</Link>
                                    
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