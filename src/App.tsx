import React from 'react';
import './App.css';
import {Temperature} from "./temperature";

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>React temperature !</h1>

            <Temperature title="first"/>
            <Temperature title="second"/>
        </div>
    );
}

export default App;
