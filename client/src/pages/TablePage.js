import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import PersonaItem from "../components/PersonaItem";
import styled from "styled-components";
import {fetchPage} from '../http/characterAPI'

const MainDiv = styled.div`

`

const ItemsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 50px auto;
`

const PaginationDiv= styled.div`
  width: 200px;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const PaginationButtons = styled.button`
  text-align: center;
  margin: auto 2em;
  border-radius: 10px;
  :hover{background-color: bisque}
  
`

const TablePage = observer((item) => {

    const [results, setResults] = useState([])
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState()

    useEffect(()=>{
            fetchPage(page).then(data => setResults(data.results))
            fetchPage(page).then(info => setPageCount(info.info))
    },[page])

    const handlerButtonPrev = () => {
        setPage(page-1)
    }

    const handlerButtonNext = () => {
        setPage(page+1)
    }

    return (
        <MainDiv>
            <ItemsDiv >
                {results.map(item => {
                    return <PersonaItem key={item.id}{...item}/>
                })}
            </ItemsDiv>
            <PaginationDiv>
                <PaginationButtons
                    onClick={handlerButtonPrev}
                    style={page === 1 ? {visibility: "hidden"} : {display: 'flex'}}
                >prev</PaginationButtons>
                {page}
                <PaginationButtons
                    onClick={handlerButtonNext}
                    style={page === pageCount ? {visibility: "hidden"} : {display: 'flex'}}
                >next</PaginationButtons>
            </PaginationDiv>
        </MainDiv>

    );
});

export default TablePage;
