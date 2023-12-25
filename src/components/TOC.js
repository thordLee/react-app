import React from 'react';

function TOC(props) {
  /* 클래스형태의 component에서 사용하는 방식
  shouldComponentUpdate() {

  }
  */

  var lists = [];
  var data = props.data;
  var i =0;
  while (i<data.length) {
    lists.push(
      <li key={"liId"+data[i].id}>
        <a href={"/content/"+data[i].id}
          data-id={data[i].id}
          onClick={function(id, e) {
            e.preventDefault();
            props.onChangePage(id);
          }.bind(props, data[i].id)}
        >{data[i].title}</a>
      </li>
    )
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