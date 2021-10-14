import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch, Link, NavLink, useParams} from 'react-router-dom';

function Home(){
  return (
      <div>
          <h2>Home</h2>
          Home...
      </div>
  )
}

var contents = [
  {id:1, title:'HTML', description:'HTML is ...'},
  {id:2, title:'JS', description:'JS is ...'},
  {id:3, title:'React', description:'React is ...'},
]

function Topic(){
  var params = useParams();
  var topic_id = params.topic_id;
  var selected_topic = {
      title:'Sorry',
      description:'Not Found'    
  }
  for(var i=0; i<contents.length; i++){
      if(contents[i].id === Number(topic_id)){
          selected_topic = contents[i];
          break;
      }
  }
  return (
      <div>
          <h3>{selected_topic.title}</h3>
          {selected_topic.description}
      </div>
  );
}

function Topics(){
  var lis = [];
  for(var i=0; i<contents.length; i++){
      lis.push(<li key={contents[i].id}><NavLink to={'/topics/'+contents[i].id}>{contents[i].title}</NavLink></li>)
  }
  return (
      <div>
          <h2>Topics</h2>
          <ul>
              {lis}
          </ul>
          <Route path="/topics/:topic_id">
              <Topic></Topic>
          </Route>
      </div>
  )
}
function Contact(){
  return (
      <div>
          <h2>Contact</h2>
          Contact...
      </div>
  )
}


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
document.getElementById('root')
);

reportWebVitals();
