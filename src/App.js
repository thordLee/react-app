//import logo from './logo.svg';
import { useState } from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import './App.css';
import Control from './components/Control';

function App() {

  const [state, setState] = useState({
      mode : 'create',
      selectedContentId : 2,
      subject : {title:'WEB', sub:'World Wide Web!'},
      welcome : {title:'Welcome', desc:'Hello React!'},
      contents : [
        {id:1, title:'HTML', desc : 'HTML is for information'},
        {id:2, title:'CSS', desc : 'CSS is for design'},
        {id:3, title:'JavaScript', desc : 'JavaScript is for interative'},
      ]
  });

  function menuChange(md, contentId) {
    let newStateData = {...state, mode:md};
    if (contentId !== ''){
      //newStateData = {...newStateData, selectedContentId:Number(contentId)};
      newStateData['selectedContentId'] = Number(contentId);
    }

    setState(newStateData);
  }

  

  //console.log('App render');

  var _title, _desc, _article = null;

  if (state.mode === 'welcome') {
    _title = state.welcome.title;
    _desc = state.welcome.desc;
    _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
  } else if (state.mode === 'read') {
    var i=0;
    while (i<state.contents.length) {
      var data = state.contents[i];
      if (data.id===state.selectedContentId) {
        _title = data.title;
        _desc = data.desc;
        break;
      }

      i++;
    }

    _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    
  } else if (state.mode === 'create') {
    _article = <CreateContent></CreateContent>;
  }

  //console.log(state.mode);

  return (
    
    <div className="App">
      <Subject 
        title={state.subject.title} 
        sub={state.subject.sub}
        onChangePage={function() {
          menuChange('welcome', '');
        }}
      ></Subject>
      <TOC data={state.contents}
        onChangePage={function(id) {
          menuChange('read', id);
        }}
      ></TOC>
      <Control onChangeMode={function(mode) {
        menuChange(mode, '');
      }}></Control>
      {_article}
    </div>
  );
}

export default App;
