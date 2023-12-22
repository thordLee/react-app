//import logo from './logo.svg';
import { useState } from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';
import './App.css';

function App() {

  const [state, setState] = useState({
      mode : 'read',
      subject : {title:'WEB', sub:'World Wide Web!'},
      welcome : {title:'Welcome', desc:'Hello React!'},
      content : [
        {id:1, title:'HTML', desc : 'HTML is for information'},
        {id:2, title:'CSS', desc : 'CSS is for design'},
        {id:3, title:'JavaScript', desc : 'JavaScript is for interative'},
      ]
  });

  function modeChange(md) {
    const newStateData = {...state, mode:md};
    setState(newStateData);
  }

  console.log('App render');

  var _title, _desc = null;

  if (state.mode === 'welcome') {
    _title = state.welcome.title;
    _desc = state.welcome.desc;
  } else if (state.mode === 'read') {
    _title = state.content[0].title;
    _desc = state.content[0].desc;
  }

  console.log(state.mode);

  return (
    
    <div className="App">
      {/*<Subject 
        title={state.subject.title} 
        sub={state.subject.sub}
  ></Subject>*/}
      <header>
        <h1><a href="/" onClick={function(e) {
          console.log(e);
          e.preventDefault();
          //state.mode='welcome';
          modeChange('welcome');
        }}>{state.subject.title}</a></h1>
        {state.subject.sub}
      </header>
      <TOC data={state.content}></TOC>
      <Content title={_title} desc={_desc}></Content>
    </div>
  );
}

export default App;
