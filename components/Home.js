import React, { useContext, useEffect } from 'react'
import { AtmObject } from '../App'
import SignIn from './SignIn'
import { useHistory } from "react-router-dom";
import RecentTrans from "./RecentTrans"
import Card from 'react-bootstrap/Card'

function Home() {
    const atmObject = useContext(AtmObject);
    const { accounts, user, isVerified} = atmObject

    let history = useHistory()

    const quickCash = ()=>{
        history.push('/components/QuickCash')
    }
    useEffect(()=>{ 
        !isVerified && document.getElementById('home-nav-div').classList.add('title-background')
    },[])
    return (
        <Card id = "home">
            {isVerified ? 
            (<div id="home-div">
                <h1 id="greeting">Hello {accounts[user].name}!</h1>
                <h2 id = "account-balance">Account Balance<br/><span className='balance-amount'>${(accounts[user].accountBalance).toLocaleString('en-us')}</span></h2>
                <button id = "quickcash-shortcut" onClick={quickCash}>Quick Cash</button>
                <div id="recent-transactions">Recent Transactions <RecentTrans withdraw={'withdraw'} deposit={"deposit"}/></div>
            </div>)
             : 
            (<div id="home-unverified">
                <h2 id="welcome">Welcome to the React Banking System</h2> 
                <SignIn />
            </div>)
            }                                   
        </Card>
    )
}

export default Home
