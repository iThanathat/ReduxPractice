import React, { Component } from 'react';
import Member from './Member';
import './App.css';
import { store } from "./store";
import ButtonGroup from "./ButtonGroup";



class App extends Component {
  render() {
    return (
        <div style={{ textAlign: "center"}}>
            <header className={"App-header"}>
                <img src={store.getState().background} alt="header" />
            </header>
            <br />
            <br />
            <br />
            <Member key={1} member={store.getState().name} />
            <ButtonGroup key={2} membername={["Cherprang","Satchan","Mind"]} />
        </div>
    );
  }
}

export default App;
