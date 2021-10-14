import React from 'react';
import {Route} from 'react-router-dom';

function First_html(){
  return (
    <Route path="/first_html">
      <div className="first_html_area">
        <p className="text">첫번째 HTML의 텍스트입니다.</p>
      </div>
    </Route>
  )
}

export default First_html;