import React from "react";

interface ITemperatureProps {
    title: string;
    value: string;
    tellMeWhereYouFrom: (e: any) => void;
}

interface ITemperatureState {

}

export class Temperature extends React.Component<ITemperatureProps, ITemperatureState> {
    render() {
        return <div>
            标题: {this.props.title}
            <input type="text" value={this.props.value} onChange={(e: any) => this.props.tellMeWhereYouFrom(e)}/>
        </div>
    }
}

//