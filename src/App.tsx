import './App.css';
import {Temperature} from "./temperature";


interface IAppProps {

}

interface IAppState {
    commonText: string;
}

export class App extends React.Component <IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);
        this.setState({
            commonText: ""
        })
    }

    tellMeYouFrom = (e: any) => {
        this.setState({
            commonText: e.target.value
        })
    };

    render() {
        return <div className="App">
            <h1>React temperature !</h1>
            <Temperature title="first" />
        </div>
    }
}

export default App;
