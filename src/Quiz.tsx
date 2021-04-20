import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import QuestionTemplate1 from "./QuestionTemplate1";
import data from './data/questions.json';

function RenderQuestionsFromJSON() {
    const question_list = data.map((el: any) => {
        return(
            <QuestionTemplate1 key={el.questionNumber} questionNumber={el.questionNumber} questionStatement={el.questionStatement} questionOptions={el.questionOptions}/>
        );
    });
    return (
        <div>
            {question_list}
        </div>
    );
}

export function Quiz() {
    return(
        <div>
            <RenderQuestionsFromJSON/>
        </div>
    );
}

export default Quiz;