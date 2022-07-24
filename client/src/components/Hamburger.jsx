import React from 'react';

const Hamburger = () => {
  // fetch(char)
  // .then((res) => res.json())
  // .then((data) => {
  //   next = data.info.next;
  //   prev = data.info.prev;
  //   displayData(data);
  // });
  // let info = `
  // <div class='modal-content'>
  // <span class='close'>&times;</span>
  // <h2>${data}<h2> 
  // <img class='div-img' src='${data.image}'/>
 
  // </div>`;
  
  return (
    <div>
      <div id="myModal" class="modal"></div>
        <button id="prev">Prev</button>
        <button id="next">Next</button>
    </div>
  );
}

export default Hamburger;
