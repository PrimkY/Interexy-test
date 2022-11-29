import React from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {TABLE_ROUTE} from "../constants/conts";

const ErrorDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 35%;
  button {
    margin-top: 20px;
    border-radius: 20px;
    :hover {
      background-color: bisque;
    }
  }
`

const ErrorPage = () => {
    const navigate = useNavigate()

    return (
        <ErrorDiv>
            <h1>Welcome to the error page!</h1>
            <h3>If you want back to the content - click the button below</h3>
            <button
                onClick={()=> navigate(TABLE_ROUTE)}
            >Click me</button>
        </ErrorDiv>
    );
};

export default ErrorPage;
