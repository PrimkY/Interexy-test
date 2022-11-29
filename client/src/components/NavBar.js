import React, {useContext} from 'react';
import {Context} from "../index";
import {LOGIN_ROUTE, PROFILE_ROUTE, TABLE_ROUTE} from "../constants/conts";
import styled from "styled-components";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

const Navigate = styled.nav`
  padding-left: 10%;
  padding-right: 10%;
  background-color: gray;
  display: flex;
  justify-content: space-between;
  height: 3em;
  align-items: center;
`

const Button = styled.button`
  border-radius: 30px;
  :hover {background-color: bisque}
`

const NavigateDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const ProfileButton = styled.button`
  border-radius: 30px;
  :hover {background-color: bisque}
  height: 40px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`


const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }

    return (
        <Navigate>
            <div>
                <Button onClick={()=> navigate(TABLE_ROUTE)}>Main</Button>
            </div>
            {user.isAuth ?
                <NavigateDiv>
                    <ProfileButton onClick={()=> navigate(PROFILE_ROUTE)}>Profile</ProfileButton>
                    <Button onClick={()=> logOut()}>Log out</Button>
                </NavigateDiv>
                :
                <div>
                    <Button onClick={()=> navigate(LOGIN_ROUTE)}>Log in</Button>
                </div>
            }

        </Navigate>
    );
});

export default NavBar;
