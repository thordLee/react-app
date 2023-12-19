//import logo from './logo.svg';
import { useState } from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';
import './App.css';

function App() {

  const [subjectTitle] = useState('WEB');
  const [subjectSub] = useState('World Wide Web!');
  var TOCArr = [];
  TOCArr = [
    {id:1, title:'HTML', desc:'HTML is for information'},
    {id:2, title:'CSS', desc:'CSS is for design'},
    {id:3, title:'JavaScript', desc:'JavaScript is form interative'},
  ]


  return (
    <div className="App">
      <Subject 
        title={subjectTitle} 
        sub={subjectSub}
      ></Subject>
      <TOC data={TOCArr}></TOC>
      <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
    </div>
  );
}

export default App;
