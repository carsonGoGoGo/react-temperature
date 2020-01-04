import './App.css';
import {Temperature} from "./temperature";
import React from "react";


interface IAppProps {

}

interface IAppState {
    commonText: string;
    value: string;
}

// 华氏温度转摄氏温度
function convertHuashi2sheshi(huashi: number) {
    return 5 * (huashi - 32) / 9;
}

// 摄氏温度转华氏温度
function sheshi2huashi(sheshi: number) {
    return 9 * (sheshi - 273.15) /5 + 32;
}

export class App extends React.Component <IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);
        this.state = {
            value: "",
            commonText: ""
        };
    }

    tellMeYouFrom = (e: any) => {
        this.setState({
            value: e.target.value
        });
    };

    render() {
        return <div className="App">
            <h1>React temperature !</h1>
            <Temperature title="first" tellMeWhereYouFrom={this.tellMeYouFrom} value={this.state.value}/>
            <Temperature title="second" tellMeWhereYouFrom={this.tellMeYouFrom} value={this.state.value}/>
        </div>
    }
}

export default App;
