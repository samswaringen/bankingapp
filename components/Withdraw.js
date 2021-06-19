import React, { useContext, useState, useEffect } from 'react'
import { AtmObject } from '../App'
import { useHistory } from "react-router-dom";
import RecentTrans from './RecentTrans';
import Card from 'react-bootstrap/Card'

function Withdraw() {
    const atmObject = useContext(AtmObject)
    const { withdraw, accounts, user } = atmObject;

    const history = useHistory()
    
    const routeQuick = ()=>{
        history.push('/components/QuickCash')
    }

    const routeOther = ()=>{
        history.push('/components/OtherWithdraw')
    }

    return (
        <Card id="withdraw-div">
            <h2 className = "account-balance">Account Balance<br/><span className='balance-amount'>${accounts[user].accountBalance.toLocaleString('en-us')}</span></h2>
            <button className = "withdraw-btn" onClick = {routeQuick}>Quick Cash</button>
            <button className = "withdraw-btn" onClick = {routeOther}>Other Amount</button>   
            <div id = "recent-withdraw-div">
                Recent Withdrawals<RecentTrans deposit="" withdraw="withdraw" />    
            </div>   
        </Card>
    )
};

export default Withdraw