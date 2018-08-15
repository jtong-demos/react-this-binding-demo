import React, { Component } from 'react';

class VariableClosure extends Component {

    constructor(props) {
        super(props);
        this.variableClosureHandlerMessage = "Variable Closure Example works";

    }

    variableClosureHandler(event) {
        alert(this.variableClosureHandlerMessage);
        alert(`current Target is ${event.currentTarget.textContent}`);
    }

    render() {
        const self = this;
        return (
            <div className="VariableClosure">
                <div>
                    <button onClick={e => self.variableClosureHandler(e)}>Variable Closure Example</button>
                </div>
            </div>
        );
    }
}

export default VariableClosure;