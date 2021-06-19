import React, { useState, useContext, useEffect } from 'react'
import { AtmObject } from '../App';
import RecentTrans from './RecentTrans';
import Card from 'react-bootstrap/Card'

function QuickCash() {
    const atmObject = useContext(AtmObject)
    const { setWithdraw, accounts, setAccounts, user} = atmObject

    const [balance, setBalance] = useState(0)
    const withdrawMoney = (e)=>{
    let amount = e.target.value;
    if((accounts[user].accountBalance - amount) < 0){
        return alert(`You don't have the funds!`)
    }else{
        let newAmount = balance - amount;
        setAccounts(accounts, accounts[user].accountBalance = newAmount);
        setAccounts(accounts, accounts[user].accountHistory.push({withdraw:amount.toLocaleString('en-us'),account:newAmount.toLocaleString('en-us')}));
        setWithdraw(amount);
        setBalance(newAmount)
        }
    }

    useEffect(() => {
        setBalance(accounts[user].accountBalance)
    }, [])

    return (
        <Card  id = 'addStuff'> 
        <h2 className = "account-balance">Account Balance<br/><span className='balance-amount'>${balance.toLocaleString('en-us')}</span></h2>
            <div id= "quickcash-div">
                <div>
                    <button className = "quick-btn" value= '20' onClick={withdrawMoney}>$20</button>
                    <button className = "quick-btn" value= '80' onClick={withdrawMoney}>$80</button>
                </div>
                <div>
                <button className = "quick-btn" value= '40' onClick={withdrawMoney}>$40</button>
                <button className = "quick-btn" value= '100' onClick={withdrawMoney}>$100</button>
                </div>
                <div>
                    <button className = "quick-btn" value= '60' onClick={withdrawMoney}>$60</button>
                    <button className = "quick-btn" value= '200' onClick={withdrawMoney}>$200</button>
                </div> 
            </div>
            <div id="recent-withdraw-quick">
               Recent Withdrawals<RecentTrans deposit="" withdraw="withdraw" />    
            </div> 
        </Card>
    )
}

export default QuickCash
