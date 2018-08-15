import React, { Component } from 'react';

class BindMethod extends Component {

    constructor(props) {
        super(props);
        this.bindHandler = this.bindHandler.bind(this);
        this.bindHandlerMessage = "Bind Method Example works";

    }

    bindHandler(event) {
        alert(this.bindHandlerMessage);
        alert(`current Target is ${event.currentTarget.textContent}`);
    }

    render() {
        return (
            <div className="BindMethod">
                <div>
                    <button onClick={this.bindHandler}>Bind Method Example</button>
                </div>
            </div>
        );
    }
}

export default BindMethod;