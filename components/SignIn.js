import React, { useContext } from 'react'
import {Formik, Form, Field, ErrorMessage } from 'formik'
import { AtmObject } from '../App'
import Card from 'react-bootstrap/Card'



const SignIn = ()=> {
    const atmObject = useContext(AtmObject);
    const { setIsVerified, accounts, setUser, setSelectedDiv, setSelected} = atmObject
    

    const initialValues = {username: "", password: ""}
    const onSubmit = (values)=>{
        console.log('values:',values);
        setUser(values.username);
        (accounts[values.username].password === values.password) ? setIsVerified(true) : alert('wrong password') 
        document.getElementById('home-nav-div').classList.add('title-background')
        setSelectedDiv('home-nav-div')
        setSelected('Home')
    }
    const validate = (values)=>{
        let errors = {};
        if(!values.username) {
            errors.username = 'Required'
        }
        if(!accounts[values.username]){
            errors.username = "Account doesn't exist"
        } 
        if(!values.password) {
            errors.password = 'Required'
        }else if(values.password.length < 8) {
            errors.password = "Password must be 8 or More Characters"
        } 
        return errors
    }


    return (
        <Card id="signin-form">
            <Formik 
                initialValues ={initialValues}
                onSubmit = {onSubmit}
                validate = {validate}
                >
                <div id="sign-in">
                    <h3>Sign In</h3>
                    <Form>
                        <div className= "field-div">
                            <Field name="username" type='input' placeholder="Enter Username"></Field>
                            <div className= "error"><ErrorMessage name="username" /></div>
                        </div>
                        <div className= "field-div">
                            <Field name="password" type='input' placeholder="Enter Password"></Field>
                            <div className= "error"><ErrorMessage name="password" /></div>
                        </div>
                        <button className="submit-btn" type="submit">Submit</button>
                    </Form>
                </div>
            </Formik>
        </Card>
    )
    

    }

export default SignIn
