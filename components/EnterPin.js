import React, { useState, useContext} from 'react'
import { AtmObject } from '../App';

function EnterPin() {
    const atmObject = useContext(AtmObject);
    const {pinCode, setPinCode, pin, accountBalance, setAccountBalance, accountHistory, setAccountHistory, setIsVerified} = atmObject;
    const [pinDisplay, setPinDisplay] = useState('')

    const selectNumber = (e)=>{
        let len = pinDisplay.length;
        let asteriskArr = Array(len).fill('*');
        asteriskArr.push(e.target.value)
        setPinDisplay([...asteriskArr])
        setPinCode([...pinCode, e.target.value])
    }
    const clearPin = ()=>{
        setPinDisplay('');
        setPinCode([]);
    }
    const undoPin = ()=>{
        setPinDisplay(pinDisplay.slice(0,pinDisplay.length-1));
        setPinCode([...pinCode.slice(0,pinCode.length-1)]);
    }
    const enterPin = ()=>{
        if(pinCode.length < 4) { 
            document.getElementById('pin-title').innerHTML = 'Pin must be 4 or More'
            document.getElementById('pin-title').style.color = 'red'
        }else{
        setIsVerified(true);
        (accountBalance[pin]) ? (console.log(accountBalance[pin])) : setAccountBalance(accountBalance, accountBalance[pin]= 0);
        (accountHistory[pin]) ? console.log(accountHistory[pin]) : setAccountHistory(accountHistory, accountHistory[pin]=[]);
        console.log(accountHistory)   
        setPinDisplay('')
        }
    }

    return (
        <div>
            <div id="inner-verification">
                <div id="verification-title">
                    <h2 id="pin-title">Enter Pin</h2>
                </div>
                <div id ="pin-display">
                    <h3>{pinDisplay}</h3>
                </div>
                <div id = "keypad">
                    <div className = "grid-row">
                        <button key = '1' className = "keypad-btn" onClick = {selectNumber} value = '1' >1</button>
                        <button key = '2' className = "keypad-btn" onClick = {selectNumber} value = '2'>2</button>
                        <button key = '3' className = "keypad-btn" onClick = {selectNumber} value = '3'>3</button>
                        </div>
                        <div className = "grid-row">
                            <button key = '4' className = "keypad-btn" onClick = {selectNumber} value = '4'>4</button>
                            <button key = '5' className = "keypad-btn" onClick = {selectNumber} value = '5'>5</button>
                            <button key = '6' className = "keypad-btn" onClick = {selectNumber} value = '6'>6</button>
                        </div>
                        <div className = "grid-row">
                            <button key = '7' className = "keypad-btn" onClick = {selectNumber} value = '7'>7</button>
                            <button key = '8' className = "keypad-btn" onClick = {selectNumber} value = '8'>8</button>
                            <button key = '9' className = "keypad-btn" onClick = {selectNumber} value = '9'>9</button>
                        </div>
                        <div className = "grid-row">
                            <button key = 'clear' className = "keypad-btn" onClick = {clearPin}>Clear</button>
                            <button key = '0' className = "keypad-btn" onClick = {selectNumber} value = '0'>0</button>
                            <button key = '<' className = "keypad-btn" onClick = {undoPin}>&lt;</button>
                        </div>
                        <div id = "submit-pin">
                            <button id = "submit-btn" onClick = {enterPin}>Submit</button>
                        </div>
                    </div>
            </div>   
        </div>
    )
}

export default EnterPin
