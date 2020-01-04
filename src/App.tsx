import './App.css';
import {Temperature} from "./temperature";
import React from "react";


interface IAppProps {

}

interface IAppState {
    temperature: number;
    type: string
}

// 华氏温度转摄氏温度
function convertHuashi2sheshi(huashi: number) {
    return (huashi - 32) * 5 / 9;
}

// 摄氏温度转华氏温度
function sheshi2huashi(sheshi: number) {
    return (sheshi * 9 / 5) + 32;
}

export class App extends React.Component <IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);
        this.state = {
            type: "",
            temperature: 0
        };
    }

    huashiChange = (e: any) => {
        this.setState({
            temperature: e.target.value,
            type: 'huashi'
        })
    };

    sheshiChange = (e: any) => {
        this.setState({
            temperature: e.target.value,
            type: 'sheshi'
        })
    };

    render() {
        const temperature = this.state.temperature;
        const {type} = this.state;
        const sheshi = type == "sheshi" ? sheshi2huashi(temperature) : temperature;
        const huashi = type == "huashi" ? convertHuashi2sheshi(temperature) : temperature;
        return <div className="App">
            <h1>React temperature !</h1>
            <Temperature title="华氏" value={sheshi} onTemperatureChange={this.huashiChange} />
            <Temperature title="摄氏" value={huashi} onTemperatureChange={this.sheshiChange} />
        </div>
    }
}

export default App;
