import React, { useState, useContext, useEffect } from 'react'
import Nav from 'react-bootstrap/Nav'
import { AtmObject } from '../App'
import '../App.css'
import { Link } from "react-router-dom";

function Navbar() {
    const atmObject = useContext(AtmObject)
    const { isVerified, selected, setSelected, selectedDiv, setSelectedDiv } = atmObject


    const handleNav = (e)=>{
        let item = e.target.innerHTML;
        let itemDiv = `${e.target.innerHTML.toLowerCase()}-nav-div`;
        if(item === selected) {
            return
        }
        if(document.getElementById(selected)){
            document.getElementById(itemDiv).classList.add('title-background')
            document.getElementById(selectedDiv).classList.remove('title-background')
            document.getElementById(selected).classList.remove('marble')
            document.getElementById(item).classList.add('marble')
            document.getElementById(selected).classList.remove('black-border-bottom')
            document.getElementById(item).classList.add('black-border-bottom')
            setSelected(item)
            setSelectedDiv(itemDiv)
        }else{
            setSelected('Home')
            setSelectedDiv('home-nav-div')
        }
        
    } 
    
    useEffect(()=>{
        document.getElementById('Home').classList.add('marble')
        document.getElementById('Home').classList.add('black-border-bottom')
    },[])

    return (
        <div id="navbar-div">
            <Nav id = "nav-component" fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item >
                    <Link to="/components/Home"  onClick = {handleNav} ><div className="nav-title" id="Home"><div id="home-nav-div">Home</div></div></Link>
                </Nav.Item>
            {!isVerified &&
                <Nav.Item >
                    <Link to="/components/CreateAccount"  onClick = {handleNav}><div className="nav-title" id="Create Account"><div id="create account-nav-div">Create Account</div></div></Link>
                </Nav.Item>
            }
            { isVerified &&
            <>
                <Nav.Item>
                    <Link to="/components/Withdraw" onClick = {handleNav}><div className="nav-title" id="Withdraw"><div id="withdraw-nav-div">Withdraw</div></div></Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/components/Deposit" onClick = {handleNav}><div className="nav-title" id="Deposit"><div id="deposit-nav-div">Deposit</div></div></Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/components/AccountHistory" onClick = {handleNav}><div className="nav-title" id="Account History"><div id="account history-nav-div">Account History</div></div></Link>
                </Nav.Item>
                <Nav.Item >
                    <Link to="/components/Logout"  onClick = {handleNav}><div className="nav-title" id="Logout"><div id="logout-nav-div">Logout</div></div></Link>
                </Nav.Item>
                
                </>
            }
            </Nav>
        </div>
    )
}

export default Navbar
