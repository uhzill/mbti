import React from 'react';
// css-in-js
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ResultData } from '../data/resultData';


const Result = () =>{

    const navigate = useNavigate();

    const handleClickButton = () =>{
        navigate('/question');
    }

    return (
        <Wrapper>
            <Header> TEST 결과!</Header>
            <Contents>
                <Title>{ ResultData[0].name }</Title>
                <ResultImg>
                    <img src={ ResultData[0].img } width={350}/>
                </ResultImg>
                <Desc>{ ResultData[0].desc }</Desc>
                <Button onClick={() => navigate("/")}>테스트 다시하기</Button>
            </Contents>
        </Wrapper>
    )

}

export default Result;

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    font-family: "jejudoldam";
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Header = styled.div`
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const Contents = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Title = styled.div`
    font-size: 30px;
    margin-top: 10px;
    color: #E59721;
`
const ResultImg = styled.div`

`
const Desc = styled.div`
    font-size: 20px;
`
const Button = styled.div`
    width: 200px;
    height: 50px;
    margin-top: 30px;
    background-color: #000;
    color: #fff;
    font-size: 20px;
    text-align: center;
    line-height: 50px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        background-color: #E59721;
        transform: scale(1.1);
    }
`