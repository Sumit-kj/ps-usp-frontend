import React from 'react';
import Quiz from './Quiz';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {QuizHome} from './QuizHome';

function App() {
  const [items, setItems] = React.useState(
      [
        {'full_name': 'apple', 'key':1 },
        {'full_name': 'bapple', 'key':2 },
        {'full_name': 'capple', 'key':3 },
        {'full_name': 'dapple', 'key':4 },
        {'full_name': 'eapple', 'key':5 }]
  );
  const [state, setState] = React.useState({value:''});
  return (
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/quiz">
              <Quiz />
            </Route>
            <Route path="/result">
              <Results />
            </Route>
            <Route path="/">
              <QuizHome/>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}


function Home(props: any) {
    return (
        <div className="App">
            <div className="App-content">
                <h2>Home</h2>
            </div>
        </div>
    );
}

// function Quiz() {
//     return <h2>This is the List Page for Issues</h2>;
// }

function Results() {
    return <h2>This is the Details Page for Issues</h2>;
}

export default App;
