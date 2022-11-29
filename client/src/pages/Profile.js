import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import styled from "styled-components";

const MainDiv = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Profile = observer(() => {

    const pass = localStorage.getItem('userPass')
    const email = localStorage.getItem('userEmail')
    const [bio, setBio] = useState('Some bio about you')


    return (
        <MainDiv>
            <h2>Info about your acc</h2>
            <div>
                Your email: {email}
            </div>
            <div>
                Your pass: {pass}
            </div>
            <div>
                Your bio: {bio}
            </div>
        </MainDiv>
    );
});

export default Profile;
