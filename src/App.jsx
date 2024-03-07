import {
  Blog,
  Feature,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";

import { Cta, Brand, NavBar } from "./components";

import './App.css'

function App() {
  return (
    <>
      <div className="App">
        <div className="gradient__bg">
         <NavBar/>
          <Header />
        </div>
        <Brand/>
        <WhatGPT3/>
        <Feature/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>

      </div>
    </>
  );
}

export default App;
