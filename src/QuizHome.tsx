import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Quiz from './Quiz';
import QuestionTemplate1 from "./QuestionTemplate1";

export function QuizHome() {
    return(
        <div>
            <Router>
                <Switch>
                    <Route path="/quiz">
                        <button>
                            <Link to="/">Back</Link>
                        </button>
                        <Quiz/>
                    </Route>
                    <Route path="/">
                        <header>
                            <h2>Quiz</h2>
                            <h4>Take this test to help us figure out what gift suits you!</h4>
                        </header>
                        <div>
                            <button>
                                <Link to="/quiz">Take Quiz</Link>
                            </button>
                        </div>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

function renderOptions(options: string[]){

}