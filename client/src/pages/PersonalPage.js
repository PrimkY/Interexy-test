import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useLocation, useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {fetchOneCharacter, fetchPage} from "../http/characterAPI";
import {ERROR_PAGE} from "../constants/conts";

const MainDiv = styled.div`
  margin: 10% 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 5px solid greenyellow;
  border-radius: 30px;
`

const ImageDiv = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 20px;
`

const AboutDiv = styled.div`
    
`

const PersonalPage = observer(() => {
    const location = useLocation()
    const navigate = useNavigate()
    const id = location.pathname.split('/')[2]
    const [character, setCharacter] = useState([])
    const [limit, setLimit] = useState()

    useEffect(()=>{
        fetchOneCharacter(id).then(data => setCharacter(data))
        fetchPage().then(info => setLimit(info.info.count))
    },[])

    if (id > limit) {navigate(ERROR_PAGE)}

    return (
        <MainDiv>
            {character.map(item => {
                return <div key={item.id}>
                    <h1>
                        {item.name}
                    </h1>
                    <ImageDiv style={{backgroundImage: `url(${item.image})`, backgroundSize: "contain"}}></ImageDiv>
                    <AboutDiv>
                        <div>Status - {item.status}</div>
                        <div>Species - {item.species}</div>
                        <div>Gender - {item.gender}</div>
                        <div>Came from - {item.origin.name}</div>
                        <div>Location now - {item.location.name}</div>
                    </AboutDiv>
                </div>;
            })}

        </MainDiv>
    );
});

export default PersonalPage;
