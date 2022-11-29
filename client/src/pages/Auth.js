import React, {useContext, useState} from 'react';
import styled from "styled-components";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, TABLE_ROUTE} from "../constants/conts";
import {useLocation, useNavigate} from "react-router-dom";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import AlertDismissible from "../components/errorAlert";

const AuthDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: calc(100vh - 3em);
  background-color: deepskyblue;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  margin-top: 10px;
  border-radius: 10px;
`
const Button = styled.button`
  align-self: end;
  margin-top: 10px;
  border-radius: 10px;
  :hover{background-color: silver}
`
const AuthLoginDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const RegistrationButton = styled.button`
  margin-top: 10px;
  background-color: greenyellow;
  border-radius: 10px;
  :hover{background-color: silver}
`
const RememberMeDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checked, setChecked] = useState(false)
    const [errorData, setErrorData] = useState()

    const handleChange = () => {
        setChecked(!checked)
    };


    const click = async (e) => {
        e.preventDefault()
        try {
            let data
            if(isLogin) {
                data = await login(email, password, checked)
            } else {
                data = await registration(email, password, checked)
            }
            user.setUser(email)
            user.setIsAuth(true)
            user.setPass(password)
            localStorage.setItem('userEmail', user.user)
            localStorage.setItem('userPass', user.pass)
            navigate(TABLE_ROUTE)
        } catch (e) {
            setErrorData(e.response.data.message)
        }

    }

    const handleButtonRegister = (e) => {
        e.preventDefault()
        navigate(REGISTRATION_ROUTE)
    }
    const handleButtonLogin = (e) => {
        e.preventDefault()
        navigate(LOGIN_ROUTE)
    }

    return (
        <AuthDiv>
            <Form>
                <h2>{isLogin ? 'Authorization' : 'Registration'}</h2>
                <Input
                    type="email"
                    placeholder={'Input your email'}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder={'Input your password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <AuthLoginDiv>
                    {isLogin ?
                        <RegistrationButton onClick={handleButtonRegister}>Register first</RegistrationButton>
                    :
                        <RegistrationButton onClick={handleButtonLogin}>To log in</RegistrationButton>
                    }
                        <Button onClick={click}>
                            {isLogin? 'Log in' : 'Register'}
                        </Button>
                </AuthLoginDiv>
                <RememberMeDiv>
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={handleChange}
                    />
                    <div>Remember me</div>
                </RememberMeDiv>
            </Form>
            { errorData ? <AlertDismissible message={errorData} style={{zIndex: 20}}/> : <div></div>}
        </AuthDiv>
    );
});

export default Auth;
