import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Button} from "@material-ui/core";

function RenderQuestionOptions(questionOptions: any){
    const renQuesOptions = [questionOptions].map((el: string, index: number)=>
        <li key={index}>
            <p>{el}</p>
        </li>
    );
    return (
        <ul>
            {renQuesOptions}
        </ul>
    )
}

function RenderQuestion(questionData: {questionNumber: number, questionStatement: string, questionOptions: any}){
    return(
        <div>
            <header>
                <h2>Question {questionData.questionNumber}</h2>
                <h4>{questionData.questionStatement}</h4>
                {/*<RenderQuestionOptions questionOptions={questionData.questionOptions}/>*/}
            </header>
        </div>
    );
}

export function QuestionTemplate1(props: any) {
    return(
        <div>
            <header>
                <RenderQuestion
                    questionNumber={props.questionNumber}
                    questionStatement={props.questionStatement}
                    questionOptions={props.questionOptions}
                />
            </header>
        </div>
    );
}


export default QuestionTemplate1;