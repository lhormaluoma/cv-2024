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
    (window.scrollY > 600 && window.scrollY < 950) ? setbodyColor("white") : setbodyColor("transparent");
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
    <div className="App">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat+Alternates:150,200,300,400" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:200,400" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora:200,400,200italic,400italic" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Karla:200,400" />
        <title>Leevi</title>
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
      <h1 style={{color: greetColor, transition: transitionTime}}><TypeAnimation
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
    /></h1>
    <div style={{}}>
      <p style = {{color:bodyColor, transition: transitionTime}}>Oon Leevi. Tekniikan opiskelija ja alan intoilija!
      Mun ykkösjuttuna on yhdistää fyysiset kokemukset koodiin. Sen lisäks harrastan kameroita, musiikkia ja kaikennäköstä urheilua :-)</p>
    </div>
    </div>
    <div style={{alignItems:"center"}}>
      <h5>Noniin, sit asiaan!</h5>
    </div>
    <div className="App-content-flex" style={{paddingBottom:"100vh"}}>
      <Contents />
    </div>
    </body>
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
