import React from "react";

interface ITemperatureProps {
    title: string
}

interface ITemperatureState {

}

export class Temperature extends React.Component<ITemperatureProps, ITemperatureState> {
    render() {
        return <div>
            标题: {this.props.title}
            <input type="text" onChange={e=>null}/>
        </div>
    }
}