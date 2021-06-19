import React, { useContext} from 'react'
import { AtmObject } from '../App'
import { useHistory } from "react-router-dom";

function Logout() {
    const atmObject = useContext(AtmObject)
    const { setIsVerified, setSelectedDiv, setSelected } = atmObject
    const history = useHistory()

    setSelectedDiv('home-nav-div')
    setSelected('Home')
    setIsVerified(false);
    document.getElementById('Home').classList.add('marble')
    document.getElementById('Home').classList.add('black-border-bottom')
    document.getElementById('home-nav-div').classList.add('title-background')
    setTimeout(()=>{
        history.push('/components/Home')
    },2000)
    return (
        <div>
            You've Been Logged out
        </div>
    )
}

export default Logout
