import React from "react";

interface ITemperatureProps {
    title: string;
    value: string;
    tellMeWhereYouFrom: (e: any) => void;
}

interface ITemperatureState {
    msg: string;
    // value: string;
}

export class Temperature extends React.Component<ITemperatureProps, ITemperatureState> {

    constructor(props: any) {
        super(props);
        this.state = {
            msg: 'the water will not boiling',
        }
    }

    render() {
        const {msg} = this.state;
        return <div style={{width: '500px', height: '200px', margin: '0 auto'}}>
            <span>第{this.props.title}个</span>
            <input type="text" value={this.props.value} onChange={e => this.props.tellMeWhereYouFrom(e)}/>

            <span>{this.props.value < '100' ? msg : 'the water will boiling'}</span>
        </div>
    }
}