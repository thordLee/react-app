import React from 'react';

function TOC(props) {
  var lists = [];
  var data = props.data;
  var i =0;
  while (i<data.length) {
    lists.push(<li key={"liId"+data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>)
    i++;
  }

    return (
      <nav>
          <ul>
              {lists}
          </ul>
      </nav>
    );
  }

export default TOC;