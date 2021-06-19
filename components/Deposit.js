import React, {useState, useContext} from 'react'
import { AtmObject } from '../App'
import RecentTrans from './RecentTrans';
import Card from 'react-bootstrap/Card'

function Deposit() {
    const atmObject = useContext(AtmObject)
    const { deposit, setDeposit, accounts, setAccounts, user } = atmObject;

    const [valueEntered, setValueEntered] = useState(false)

    const handleDeposit = ()=>{
        (document.getElementById('deposit').value != '') ? setValueEntered(true) : setValueEntered(false)
        let newDeposit = document.getElementById('deposit').value;
        setDeposit(newDeposit);
    }

    const depositMoney = ()=>{
        let deposit = Number(document.getElementById('deposit').value);
        console.log(document.getElementById('deposit').value)
        if((document.getElementById('deposit').value) === ' '){
            console.log('working')
            alert("Your deposit is Not a Number")
            return
        }
        if(deposit < 0){
            alert("You cannot deposit a negative amount")
            return
        }
        let newAmount = accounts[user].accountBalance + deposit;
        setAccounts(accounts, accounts[user].accountBalance = newAmount);
        setAccounts(accounts, accounts[user].accountHistory.push({deposit:deposit.toLocaleString('en-us'),account:newAmount.toLocaleString('en-us')}));
        console.log(accounts[user].accountHistory)
        setDeposit(0);
        document.getElementById('deposit').value = 0;
    }

    return(
        <Card id="deposit-div">
            <h2 className = "account-balance">Account Balance<br/><span className='balance-amount'>${(accounts[user].accountBalance).toLocaleString('en-us')}</span></h2>
            <div id="deposit-amount-div">
                <h3>Deposit Amount: <span className='balance-amount'>${deposit}</span></h3>
                <input type = 'number' id = 'deposit' onChange = {handleDeposit}></input>
                <button type = 'button' id = 'deposit-button' onClick = {depositMoney} disabled = {!valueEntered}>Deposit</button>
            </div>
            <div id="recent-deposit">
                Recent deposits <RecentTrans deposit="deposit" withdraw=""/>
            </div>
        </Card>
    )
};

export default Deposit