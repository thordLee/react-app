import React from 'react'

function Control(props) {
  return (
    <div>
      <ul>
        <li><a href="/create" onClick={function(e) {
            e.preventDefault();
            props.onChangeMode('create');
        }}>Create</a></li>
        <li><a href="/update" onClick={function(e) {
            e.preventDefault();
            props.onChangeMode('update');
        }}>Update</a></li>
        <li><input type="button" value="Delete" onClick={function(e) {
            e.preventDefault();
            props.onChangeMode('delete');
        }} /></li>
      </ul>
    </div>
  )
}

export default Control
