import React from "react";

interface ITemperatureProps {
    title: string;
    // tellMeWhereYouFrom: (e: any) => void;
}

interface ITemperatureState {
    msg: string;
    value: string;
}

export class Temperature extends React.Component<ITemperatureProps, ITemperatureState> {

    constructor(props: any) {
        super(props);
        this.state = {
            msg: 'the water will not boiling',
            value: '0'
        }
    }

    render() {
        const {value, msg} = this.state;
        return <div>
            <span>第{this.props.title}个</span>
            <input type="text" value={value} onChange={e=>this.setState({value:e.target.value})}/>

            <span>{value < '100' ? msg : 'the water will boiling'}</span>
        </div>
    }
}