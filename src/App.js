import logo from './logos/logo512-w.png';
import './App.css';
import { TypeAnimation } from 'react-type-animation';
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import file from "./content-blocks/CV.md";
import rehypeRaw from 'rehype-raw';

function App() {

  const [navColor, setnavColor] = useState("transparent,transparent");
  const [bodyColor, setbodyColor] = useState("transparent");
  const [greetColor, setgreetColor] = useState("white");
  const listenScrollEvent = () => {
    window.scrollY > 80 ? setnavColor("180deg, rgba(16,16,16,1) 0%, rgba(16,16,16,1) 50%, rgba(0,212,255,0) 100%") : setnavColor("transparent,transparent");
    (window.scrollY > 900 && window.scrollY < 1350) ? setbodyColor("white") : setbodyColor("transparent");
    window.scrollY > 150 ? setgreetColor("transparent") : setgreetColor("white");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const transitionTime = "all 0.4s";

  return (
    <div>
    <div className="App">
      <head>
      </head>
      <header className="App-header" style={{
            background: `linear-gradient(${navColor})`,
          transition: transitionTime
        }}>
        <a href="./">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <h3>
          Leevi Hormaluoma
        </h3>
      </header>
    <body className="App-body">
    <div className="App-info" >
      <h5 style={{color: greetColor, transition: transitionTime}}><TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Oon Leevi',
        500,
        'Oon Osaava',
        500,
        'Oon Luova',
        500,
        'Oon Fiksu',
        500,
        'Oon kohta teillä töissä?',
        500,
        'Oon Leevi.',
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={0}
      cursor={false}
    /></h5>
    <div style={{}}>
      <p style = {{color:bodyColor, transition: transitionTime}}>Oon Leevi. Tekniikan opiskelija ja alan intoilija!
      Mun ykkösjuttuna on yhdistää fyysiset kokemukset koodiin. Sen lisäks harrastan kameroita, musiikkia ja kaikennäköstä urheilua :-)</p>
    </div>
    </div>
    <div style={{alignItems:"center"}}>
      <h1>Noniin, sit asiaan!</h1>
    </div>
    <div className="App-content-flex">
      <Contents />
    </div>
    </body>
    <div className="App-footer">
      <div style={{width:"70%"}}>
        <p>Tämän sivun tarkoitus on toimia todisteena.</p>
        <p>Kiitos lukemisesta, tiivistetympi CV löytyy <a href="googledrive.com">täältä!</a></p>
      </div>
    </div>
    </div>
    </div>
  );
}

const Contents = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
      <ReactMarkdown children={markdown} allowDangerousHTML rehypePlugins={[[rehypeRaw]]} />
  );
}

export default App;
