import './App.css';
import {Temperature} from "./temperature";
import React from "react";


interface IAppProps {

}

interface IAppState {
    commonText: string;
    value: string;
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
            {/*<Temperature title="second" />*/}
        </div>
    }
}

export default App;
