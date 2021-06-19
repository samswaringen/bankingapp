import React, { useContext } from 'react'
import { AtmObject } from '../App'

function RecentTrans({deposit, withdraw}) {
    const atmObject = useContext(AtmObject);
    const { accounts, user} = atmObject
    let accHist = [];

    if(withdraw === 'withdraw' && deposit ===''){
        accounts[user].accountHistory.map(item=>{
            if(item.withdraw) accHist.push(item);
        })
    }else if(deposit === 'deposit' && withdraw === ''){
        accounts[user].accountHistory.map(item=>{
        if(item.deposit) accHist.push(item);
        })
    }else{
        accHist = accounts[user].accountHistory
    }
    
    return (
        <div className = 'recent-trans'>
            {(accHist.length<5) ? accHist.map(item=>(item.deposit)?<div>{`Deposited: $${item.deposit} | New Balance: $${item.account}`}</div> : <div>{`Withdraw: $${item.withdraw} | New Balance: $${item.account}`}</div>) : accHist.slice(accHist.length-5, accHist.length).map(item=>(item.deposit)?<div>{`Deposited: $${item.deposit} | New Balance: $${item.account}`}</div> : <div>{`Withdraw: $${item.withdraw} | New Balance: $${item.account}`}</div>)}
        </div>
    )
}

export default RecentTrans
