import React, {useState, useEffect, useContext} from 'react'
import { AtmObject } from '../App'

function HandleHistory(){
    const atmObject = useContext(AtmObject)
    const {accounts, user} = atmObject;
    return (
        <div className = "history-item">
            {accounts[user].accountHistory.map((item)=>item.withdraw ? <li style={{color:'red'}}>Withdrew <strong>${item.withdraw}</strong> | New Balance:<strong>${item.account}</strong></li> : <li style={{color:'green'}}>Deposited <strong>${item.deposit}</strong> | New Balance:<strong>${item.account}</strong></li>)}
        </div>
    )
}

export default HandleHistory