import { useState } from "react"
import "../App.css"
import React from 'react';


const Tabs = () => {
  
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const slideDiv = document.querySelector(".slider")
const quotes = [];

let i = 0;
const time = 10000;
const width = 1000;
let delta = width;

async function fillQuotes() {
  const url = "https://api.tronalddump.io/random/quote"
  
  for (let i = 0; i < 5; i++) {
    let response = await fetch(url)
    let data = await response.json();
    
    
    quotes.push(data.value)
  }

  renderData()
}

fillQuotes()

function renderData() {
  let quoteTags = ""

  for (let i = 0; i < quotes.length; i++) {
    quoteTags += `<h3 class="slider-item">${quotes[i]}</h3>`
    console.log(quotes)
  }

  slideDiv.insertAdjacentHTML('beforeend', quoteTags)
}

function changeQuotes() {
  if (i < quotes.length - 1) {
    slideDiv.style.transform = `translateX(${-delta}px)`
    delta += width
    i++
  } else {
    slideDiv.style.transform = `translateX(0px)`
    delta = 0
    i = 0
  }
}

setInterval(changeQuotes, time)
  

  return (

    <div className="container">
      <div className="block-tabs">
        <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)} >
          First
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)} >
         Quotes
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)} >
          Third
          </button>
      </div>
      <div className="content-tabs">
        <div className={toggleState === 1 ? "content active-content" : "content"}>
          <hr />
          
        </div>
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Tronald Dump Quotes</h2>
          <hr />
          <div class="slider-container">
    <div class="slider">
     
    </div>
  </div>
    
          
        </div>
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
      
        </div>

      </div>
    </div>
  );
}

export default Tabs;
