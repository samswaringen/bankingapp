import React, { useState, useContext } from 'react'
import {Formik, Form, Field, ErrorMessage } from 'formik'
import { AtmObject } from '../App'
import { useHistory } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import openeye from '../openeye.png'
import closedeye from '../closedeye.png'

function CreateAccount() {
    const atmObject = useContext(AtmObject);
    const { accounts, setAccounts, setSelectedDiv} = atmObject

    const [showPw, setShowPw] = useState(false)
    const [showVerPw, setShowVerPw] = useState(false)

    const history = useHistory();

    const initialValues = {
        username: "", 
        name: '',  
        email:"", 
        password: "",
        verifyPassword: ""
    }

    const showHidden = (e)=>{
        setShowPw(!showPw)
        showPw ? e.target.innerHTML = 'Show' : e.target.innerHTML = "Hide"
    }

    const showVerHidden = (e)=>{
        setShowVerPw(!showVerPw)
        showVerPw ? e.target.innerHTML = 'Show' : e.target.innerHTML = "Hide"
    }
    
    const onSubmit = (values)=>{
        console.log('values:',values)
        setAccounts(accounts,accounts[values.username] = {email: values.email, name: values.name, password:values.password, accountBalance: 0, accountHistory:[]});
        document.getElementById('home-nav-div').classList.add('title-background')
        document.getElementById('Home').classList.add('marble')
        document.getElementById('Home').classList.add('black-border-bottom')
        document.getElementById('create account-nav-div').classList.remove('title-background')
        document.getElementById('Create Account').classList.remove('marble');
        document.getElementById('Create Account').classList.remove('black-border-bottom');
        setSelectedDiv('home-nav-div')

        history.push('/components/Success')     
    }

    const validate = (values)=>{
        let errors = {};
        if(!values.username) {
            errors.username = 'Required'
        }else if(accounts[values.username]){
            errors.username = 'Username already exists!'
        } 
        if(!values.name) {
            errors.name = 'Required'
        } 
        if(!values.email) {
            errors.email = 'Required'
        }else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]{2,4}$/.test(values.email)) { 
             errors.email = "Not a valid email"
        } 
        if(!values.password) {
            errors.password = 'Required'
        }else if(!/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/.test(values.password)) {
            errors.password = "Password must contain at least 8 characters, one uppercase, one number and one special character"
        }
        if(!values.password) {
            errors.verifyPassword = 'Required'
        }else if(values.password != values.verifyPassword){
            errors.verifyPassword = "Passwords don't match!"
        } 
        return errors
    }

    return (
        <Card id="signup-form">
            <Formik
                initialValues = {initialValues}
                onSubmit = {onSubmit}
                validate = {validate}
                >
                {
                    formik =>{
                        return(
                            <div id="sign-up">
                            <h2 id="create-title">Create Account</h2>
                            <Form><div className= "field-div">
                                    <Field id = "create-username" name="username" type='input' placeholder="Create Username" ></Field>
                                    <div className= "error"><ErrorMessage name = 'username'/><ErrorMessage name = 'checkUser'/></div>
                                </div>
                                <div className= "field-div">
                                    <Field id = "create-name" name="name" type='input' placeholder="Greeting Name"></Field>
                                    <div className= "error"><ErrorMessage name = 'name'/></div>
                                </div>
                                <div className= "field-div">
                                    <Field id = "create-email" name="email" type='email' placeholder="Enter Email"></Field>
                                    <div className= "error"><ErrorMessage name = 'email'/></div>
                                </div>
                                <div className= "field-div">
                                    <Field id = "create-password" name="password" type={showPw ? 'text' : 'password'} placeholder="Create Password" ></Field><div id = "showPassSpan" type="button" onClick={showHidden}>Show</div>
                                    <div className= "error"><ErrorMessage name = 'password'/></div>
                                </div>
                                <div className= "field-div">
                                    <Field id = "create-verify" name="verifyPassword" type={showVerPw ? 'text' : 'password'} placeholder="Verify Password"></Field><span id = "showPassVerSpan" type="button" onClick={showVerHidden}>Show</span>
                                    <div className= "error"><ErrorMessage name = 'verifyPassword'/></div>
                                </div>
                                <button id= "create-submit" className="submit-btn" type="submit" disabled = {!(formik.dirty && formik.isValid)}>Submit</button>
                            </Form>
                        </div>
                        )
                    }
                }
            </Formik>
        </Card>
    )
}

export default CreateAccount
