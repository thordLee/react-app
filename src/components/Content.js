import React from 'react';
console.log('Content render');
function Content(props) {
    
    return (
      <article>
          <h2>{props.title}</h2>
          {props.desc}
      
      </article>
    );
  }

export default Content;