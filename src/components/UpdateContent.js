import React, {useState} from 'react';


function UpdateContent(props) {

  let [updateState, setUpdateState] = useState(props.data);

  function inputFormHandler(e) {
    setUpdateState({[e.target.name]:e.target.value});
  }

  //console.log('update', updateState);
    return (
      <article>
          <h2>Update</h2>
          <form action="/create_process" method="post"
            onSubmit={function(e) {
              e.preventDefault();
              //alert('submit');
              props.onSubmit(
                e.target.id.value,
                e.target.title.value, 
                e.target.desc.value
              );
            }}
          >
            <input type="hidden" name="id" value={updateState.id}></input>
            <p>
              <input 
                type="text" 
                name="title" 
                placeholder="title" 
                value={updateState.title}
                onChange={inputFormHandler}
              ></input>
            </p>
            <p>
              <textarea 
                name="desc" 
                placeholder="description" 
                value={updateState.desc}
                onChange={inputFormHandler}
              ></textarea>
            </p>
            <p><input type="submit"></input></p>
          </form>      
      </article>
    );
  }

export default UpdateContent;