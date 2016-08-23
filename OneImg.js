import React from "react";


export default class OneImg extends React.Component {




    render() {

        return (
            <img src={this.props.src} className="image"/>
        )
    }
}