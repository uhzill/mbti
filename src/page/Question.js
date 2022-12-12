import React from 'react';
import styled from 'styled-components';
import { ProgressBar, Button } from 'react-bootstrap';
import { QuestionData } from '../data/questionData';

const Question = () => {

    return (
        <Wrapper>
            <ProgressBar variant="warning" now={60} />
            <Wrap>
                <Title>{ QuestionData[0].title }</Title>
                <ButtonGroup>
                    <Button style={{ width: '100%', minHeight: '80px', fontSize: '20px'}}>{ QuestionData[0].answerA }</Button>
                    <Button style={{ width: '100%', minHeight: '80px', fontSize: '20px', marginTop: '20px'}}>{ QuestionData[0].answerB }</Button>
                </ButtonGroup>
            </Wrap>
        </Wrapper>
    )
}

export default Question;

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    font-family: "jejudoldam";
`
const Wrap = styled.div`
    height: calc(100vh - 20px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Title = styled.div`
    font-size: 30px;
    text-align: center;
    margin-top:  50px;
`
const ButtonGroup = styled.div`
    width: 60vw;
    margin-top:  50px;
`