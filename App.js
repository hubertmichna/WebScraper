import React from "react";
import OneImg from "./OneImg";
import Header from "./Header";
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');



export default class App extends React.Component {
constructor() {
   super();
    this.state={inputValue:"",src:[]}
}
    xml() {

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:8080/");

        xhr.send(this.state.inputValue);
        var self = this;
        xhr.onload = function() {
            self.setState({src: JSON.parse(this.responseText)});
        };

    }


    changeInputValue(link) {
        this.setState({inputValue: link});
    }




    render() {
        var val = [];
        for (var i = 0; i <= 100; i++) {
            val.push(i);
        }

        var oneImg = val.map((val) => {
            if( typeof this.state.src[val] !== "undefined")
            return <OneImg key={val} src={this.state.src[val]}/>
        });


        return(
                <div>
                    <Header changeInputValue={this.changeInputValue.bind(this)} xml={this.xml.bind(this)}/>
                        <div className="imageContainer">
                    <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
                    {oneImg}
                    </ReactCSSTransitionGroup>
                        </div>
                </div>
        )
    }
}