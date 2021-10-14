import logo from './logo.svg';
import './App.css';
import Home from './views/Home.jsx';
import First_html from './views/First_html.jsx';
import Second_html from './views/Second_html.jsx';
import {BrowserRouter, Route, Switch, Link, NavLink, useParams} from 'react-router-dom';


function App() {
  return (
    <>
      <header>
        <h1>React Router DOM example</h1>
        <nav>
          <ul>
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/first_html">First_html</NavLink></li>
              <li><NavLink to="/second_html">Second_html</NavLink></li>
          </ul>
        </nav>
      </header>

      <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/first_html"><First_html /></Route>
          <Route path="/second_html"><Second_html /></Route>
          <Route path="/">Not found</Route>
      </Switch>
    </>
  );
}

export default App;
