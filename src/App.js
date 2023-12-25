//import logo from './logo.svg';
import { useState } from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import './App.css';
import Control from './components/Control';

function App() {
  let maxContentId = 3;
  const [state, setState] = useState({
      mode : 'welcome',
      selectedContentId : 2,
      subject : {title:'WEB', sub:'World Wide Web!'},
      welcome : {title:'Welcome', desc:'Hello React!'},
      contents : [
        {id:1, title:'HTML', desc : 'HTML is for information'},
        {id:2, title:'CSS', desc : 'CSS is for design'},
        {id:3, title:'JavaScript', desc : 'JavaScript is for interative'},
      ]
  });

  //상태변경 및 메뉴 이동
  function menuChange(md, contentId) {
    let newStateData = {...state, mode:md};
    if (contentId !== ''){
      //newStateData = {...newStateData, selectedContentId:Number(contentId)};
      newStateData['selectedContentId'] = Number(contentId);
    }

    setState(newStateData);
  }

  //contents create, update, delete
  function contentCUD(md, id, title, desc) {
    let newStateData = {...state};

    var _oriContent = newStateData.contents;
    
    if (md==='create') {
      maxContentId++;
      
      newStateData.contents.push(//보통은 concat을 사용한다.
        {id:maxContentId, title:title, desc:desc}
      );
      newStateData.mode = 'read';
      newStateData.selectedContentId = maxContentId;
      
      // newStateData.contents = newStateData.contents.concat(
      //   {id:maxContentId, title:title, desc:desc}
      // );
    } else if (md==='update') {
      console.log('update', id, title, desc);
      
      
      //console.log(_oriContent);
      //debugger;
      var i=0;
      while (i<_oriContent.length) {
        if (_oriContent[i].id === id) {
          _oriContent[i] = {id:id, title:title, desc:desc};
          console.log(_oriContent[i]);
          //debugger;
          newStateData.contents[i] = _oriContent[i];
          //newStateData.contents[i].desc = desc;
          newStateData.mode = 'read';

          break;
        }
        i++;
      }


    } else if (md==='delete') {
      if (window.confirm('삭제하시겠습니까?')) {
        var i=0;
        
        while (i<_oriContent.length) {
          if (_oriContent[i].id === state.selectedContentId) {
            //_oriContent.splice(i,1);
            //slice 보다는 filter를 더 많이 사용한다.
            newStateData.contents = _oriContent.filter(arr => arr.id !== state.selectedContentId);
            newStateData.mode = 'welcome';
            alert('deleted');
            break
  
          }
          i++;
        }
      }

    }
    console.log(newStateData);
    setState(newStateData);
  }

  function getReadContent() {
    var i=0;
    while (i<state.contents.length) {
      var data = state.contents[i];
      if (data.id===state.selectedContentId) {
        //_title = data.title;
        //_desc = data.desc;
        return data;
        break;
      }

      i++;
    }
  }

  //내용을 가져오는 component
  function getContent() {
    var _content, _title, _desc, _article = null;

    if (state.mode === 'welcome') {
      _title = state.welcome.title;
      _desc = state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (state.mode === 'read') {
      
      //내용을 가져온다
      _content = getReadContent();

      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>;
      
    } else if (state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title, _desc) {
        // add content to state.contents
        console.log(_title, _desc);
        contentCUD('create', 0, _title, _desc);
      }}></CreateContent>;
    } else if (state.mode === 'update') {
      _content = getReadContent();
      
      _article = <UpdateContent data={_content} onSubmit={function(_id, _title, _desc) {
        // add content to state.contents
        //console.log(_id, _title, _desc);
        contentCUD('update', Number(_id), _title, _desc);
      }}></UpdateContent>;
    }

    return _article;
  }

  //console.log('App render');

 

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
        if (mode==='delete') {
          contentCUD(mode, '', '', '');
        } else {
          menuChange(mode, '');
        }
      }}></Control>
      {getContent()}
    </div>
  );
}

export default App;
