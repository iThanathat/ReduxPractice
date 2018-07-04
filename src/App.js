import React, { Component } from 'react';
import Member from './Member';
import './App.css';
import { store } from "./store";
import ButtonGroup from "./components/ButtonGroup";



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
            <ButtonGroup key={2} membername={["Cherprang","Satchan","Orn"]} /> <br />
            <ButtonGroup key={3} membername={["Korn","Pun","Mind"]} /> <br />
            <ButtonGroup key={4} membername={["Tarwaan","Music","Namsai"]} /> <br />
            <ButtonGroup key={5} membername={["Noey","Kaew","Kaimook"]} /> <br />
        </div>
    );
  }
}

export default App;
