import React from 'react';
import {Route} from 'react-router-dom';

function Second_html(){
  return (
    <Route path="/second_html">
      <div className="second_html_area">
        <p className="text">두번째 HTML의 텍스트입니다.</p>
      </div>
    </Route>
  )
}

export default Second_html;