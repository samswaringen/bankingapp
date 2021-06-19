import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react'
import temple from './temple.png'
import Withdraw from './components/Withdraw'
import Deposit from './components/Deposit'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Navbar from './components/Navbar';
import EnterPin from './components/EnterPin';
import AccountHistory from './components/AccountHistory';
import Home from './components/Home'
import CreateAccount from './components/CreateAccount';
import Logout from './components/Logout'
import QuickCash from './components/QuickCash'
import OtherWithdraw from './components/OtherWithdraw';
import Success from './components/Success';
import Card from 'react-bootstrap/Card'

export const AtmObject = React.createContext()

function ATM() {
    const [accounts, setAccounts] = useState({})
    const [user, setUser] = useState('')
    const [accountBalance, setAccountBalance] = useState({});
    const [withdraw, setWithdraw] = useState(0);
    const [deposit, setDeposit] = useState(0);
    const [accountHistory, setAccountHistory] = useState({});
    const [isVerified, setIsVerified] = useState(false);
    const [selected, setSelected] = useState('Home')
    const [selectedDiv, setSelectedDiv] = useState('home-nav-div')

    return (
        <Router>
            <Card id= "brick-wall">
                <Card id="atm-screen-div">
                    <img src={temple} id = "temple"/>
                    <div id="atm-title">REACT BANK ATM</div>
                    <AtmObject.Provider value={{isVerified:isVerified, selected:selected, setSelected:setSelected, selectedDiv:selectedDiv, setSelectedDiv:setSelectedDiv}}>
                        <Navbar />
                    </AtmObject.Provider>
                        <AtmObject.Provider value={{
                            accounts:accounts,
                            setAccounts:setAccounts,
                            user:user,
                            setUser:setUser,
                            withdraw: withdraw,
                            setWithdraw: setWithdraw,       
                            deposit: deposit,
                            setDeposit: setDeposit,
                            isVerified: isVerified,
                            setIsVerified: setIsVerified,
                            accountBalance:accountBalance,
                            setAccountBalance, setAccountBalance,
                            accountHistory: accountHistory,
                            setAccountHistory: setAccountHistory,
                            setSelected:setSelected,
                            setSelectedDiv:setSelectedDiv
                        }}>
                        <Card id = "atm-screen">
                            <Card id="interactive">
                                <Route exact path="">
                                    <Redirect to="/components/Home" />
                                </Route>
                                <Route exact path="/">
                                    <Redirect to="/components/Home" />
                                </Route>
                                <Route path="/components/EnterPin">
                                    <EnterPin />    
                                </Route>
                                <Route path="/components/Home" >
                                    <Home />
                                </Route>
                                <Route path="/components/CreateAccount">
                                    <CreateAccount />
                                </Route>
                                <Route path="/components/Success">
                                    <Success />
                                </Route>
                                <Route path="/components/Withdraw" >
                                    <Withdraw />
                                </Route>
                                <Route path="/components/QuickCash" >
                                    <QuickCash />
                                </Route>
                                <Route path="/components/OtherWithdraw" >
                                    <OtherWithdraw />
                                </Route>
                                <Route path="/components/Deposit" >
                                    <Deposit />
                                </Route>   
                                <Route path="/components/AccountHistory" >
                                    <AccountHistory />
                                </Route> 
                                <Route path="/components/Logout" >
                                    <Logout />
                                </Route>   
                            </Card>
                        </Card>
                    </AtmObject.Provider>
                </Card>
            </Card>
        </Router>
    )
}

export default ATM

