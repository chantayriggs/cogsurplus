import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import stateContext, { StateContext } from "../context/stateContext"
import Logo from "../images/cogsur.png"
import { User, ShoppingBag, Search, Menu } from "react-feather"


const Navbar = () => {

    const [showDisciplines, setShowDisciplines] = useState(false)
    const [showSales, setShowSales] = useState(false)

    const { 
        isAuthenticated, 
        user, 
        showCart, 
        setShowCart, 
        showSideMenu, 
        setShowSideMenu,
        disciplines,
        showCollectionDropdown,
        setShowCollectionDropdown,
        setCurrentDiscipline,
        setCurrentSale
    } = useContext(StateContext)

    const mouseOverMenu = (menu) =>  {
        if (menu === "disc") {
            setShowDisciplines(true)
            setShowSales(false)
            setShowCollectionDropdown(false)
        }
        if (menu === "sales") {
            setShowDisciplines(false)
            setShowSales(true)
            setShowCollectionDropdown(false)
        }
    }

    const mouseLeaveMenu = () =>  {
            setShowDisciplines(false)
            setShowSales(false)
            setShowCollectionDropdown(false)
    }

    const handleDisciplineClick = discipline => {
        setCurrentDiscipline(discipline)
        setShowDisciplines(false)
    }

    const handleSaleClick = sale => {
        setCurrentSale(sale)
        setShowSales(false)
    }

    useEffect( () => {
        if (showCollectionDropdown) {
            setShowDisciplines(false) 
            setShowSales(false)
        }
    }, [showCollectionDropdown])

    return (
        <div className="navbar">
            <div onClick={ () => setShowSideMenu(!showSideMenu) } className="menu navbar-element">
                <Menu />
            </div>
            <div className="left">
                <div 
                onMouseEnter={() => mouseOverMenu("disc")} 
                className={showDisciplines ? "navbar-element active" : "navbar-element"}
                >
                    <div className="nav-link">Disciplines</div>
                    { showDisciplines ?
                        <div onMouseLeave={() => mouseLeaveMenu()} className="menu-dropdown menu-column">
                            { disciplines.map( discipline => (
                                <Link 
                                onClick={() => handleDisciplineClick(discipline) }  
                                className="menu-type" 
                                to={`/discipline/${(discipline).toLowerCase().replace(" ", "-")}`}
                                >
                                    <div className="menu-type" >{discipline}</div>
                                </Link>
                                
                            )) }
                        </div>
                    : null }
                </div>
                <div className={showCollectionDropdown ? "navbar-element active" : "navbar-element"} onMouseEnter={() => setShowCollectionDropdown(true)}>
                    <div className="nav-link" >Collections</div>
                </div>
                <div  
                    
                    onMouseEnter={() => mouseOverMenu("sales")} 
                    className={showSales ? "navbar-element active" : "navbar-element"}
                >
                    <div className="nav-link">Sale</div>
                    { showSales ?
                        <div onMouseLeave={() => mouseLeaveMenu()} className="menu-dropdown menu-column">
                                <Link 
                                onClick={() => handleSaleClick("Sale 1") }  
                                className="menu-type" 
                                to={"sale/sale-1"}
                                >
                                    <div className="menu-type" >Sale 1</div>
                                </Link>
                                <Link 
                                onClick={() => handleSaleClick("Sale 2") }  
                                className="menu-type" 
                                to={"sale/sale-2"}
                                >
                                    <div className="menu-type" >Sale 2</div>
                                </Link>
                        </div>
                    : null }
                </div>
            </div>
            <div className="center">
                <Link to="/">
                    <img src={Logo} />
                </Link>
            </div>
            <div className="right">
                {
                    isAuthenticated ? 
                    <div className="for-admin">
                        {
                            user.role === "admin" ?
                            <Link className="navbar-element" to="/admin">
                                Admin
                            </Link> : null
                        }
                        <Link className="navbar-element" to="/account">
                            <User />
                        </Link>
                    </div>
                    :
                    <Link className="navbar-element user" to="/login">
                        <User />
                    </Link>
                }
    
                <div className="navbar-element">
                    <Search />
                </div>
                <div onClick={ () => setShowCart(!showCart)} className="navbar-element">
                    <ShoppingBag />
                </div>
            </div>
        </div>
    )
}

export default Navbar