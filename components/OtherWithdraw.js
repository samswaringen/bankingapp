import React, { useContext, useState, useEffect } from 'react'
import { AtmObject } from '../App';
import RecentTrans from './RecentTrans';
import Card from 'react-bootstrap/Card'

function OtherWithdraw() {
    const atmObject = useContext(AtmObject)
    const { withdraw, setWithdraw, accounts, setAccounts, user } = atmObject;

    const [valueEntered, setValueEntered] = useState(false)

    const withdrawMoney = ()=>{
        let withdraw = Number(document.getElementById('withdraw').value)
        if(document.getElementById('withdraw').value === ' '){
            alert("Your deposit is Not a Number")
            return
        }
        if(withdraw < 0){
            alert("You cannot deposit a negative amount")
            return
        }
        if((accounts[user].accountBalance - withdraw) < 0){
            return alert(`You don't have the funds!`)
        }else{
            let newAmount = accounts[user].accountBalance - withdraw;
            setAccounts(accounts, accounts[user].accountBalance = newAmount);
            setAccounts(accounts, accounts[user].accountHistory.push({withdraw:withdraw.toLocaleString('en-us'),account:newAmount.toLocaleString('en-us')}));
            setWithdraw(withdraw);
            document.getElementById('withdraw').value = 0;
        }
    }

    const handleWithdraw = ()=>{
        (document.getElementById('withdraw').value != '') ? setValueEntered(true) : setValueEntered(false)
        let newwithdraw = document.getElementById('withdraw').value;
        setWithdraw(newwithdraw);
    }


    return (
        <Card id="other-withdraw-card">
            <h2 className = "account-balance">Account Balance<br/><span className='balance-amount'>${accounts[user].accountBalance.toLocaleString('en-us')}</span></h2>
            <h3>Withdraw Amount: <span className='balance-amount'>${withdraw}</span></h3>
            <div id = "other-withdraw">
                <input type = 'number' id = 'withdraw' onChange = {handleWithdraw}></input>
                <button id = 'other-button'onClick = {withdrawMoney} disabled = {!valueEntered}>Other Amount</button>
            </div>
            <div>
                Recent Withdrawals<RecentTrans deposit="" withdraw="withdraw" />    
            </div> 
        </Card>
    )
}

export default OtherWithdraw
