import React from 'react';
import styled from "styled-components";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import {PERSONAL_ROUTE} from "../constants/conts";

const PersonalCard = styled.div`
  padding: 15px;
  border-radius: 10px;
  height: 180px;
  width: 480px;
  text-align: center;
  background-color: grey;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  :hover {
    cursor: pointer;
  }
  .img{
    width: 150px;
    height: 150px;
    border-radius: 10px;
  }
  ul{
    width: 300px;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  li{
    text-align: start;
  }
`

const PersonaItem = observer((item) => {
    const navigate = useNavigate()


    return (
        <PersonalCard onClick={()=> navigate(PERSONAL_ROUTE + '/' + item.id)}>
            <div className="img" style={{backgroundImage: `url(${item.image})`,backgroundSize:"contain"}}></div>
            <div className="description"><ul>
                <li><h3>{item.name}</h3></li>
                <li>Status - {item.status}</li>
                <li>Gender - {item.gender}</li>
                <li>Came from - {item.origin.name}</li>
            </ul></div>
        </PersonalCard>
    );
});

export default PersonaItem;
