import React from "react";


export default class Header extends React.Component {

    chandleInputValue(e) {
        this.props.changeInputValue(e.target.value);

    }

    render() {

        return (
            <div className="header">
                <input type="text" name="page"  placeholder="Enter url" onChange={this.chandleInputValue.bind(this)} size="55"/>
                <button onClick={this.props.xml}>Download images</button>
            </div>
        )
    }
}