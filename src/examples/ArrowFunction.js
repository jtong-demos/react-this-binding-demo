import React, { Component } from 'react';

class ArrowFunction extends Component {

    constructor(props){
        super(props);
        this.arrowHandler1Message = "Arrow Handler Example 1 works";
        this.arrowHandler2Message = "Arrow Handler Example 2 works";

    }

    arrowHandler1(event){
        alert(this.arrowHandler1Message);
        alert(`current Target is ${event.currentTarget.textContent}`);
    }

    arrowHandler2 = (event) => {
        alert(this.arrowHandler2Message);
        alert(`current Target is ${event.currentTarget.textContent}`);
    }
    

    render() {
        return (
            <div className="ArrowFunction">
                <div> 
                   <button onClick={e=>this.arrowHandler1(e)}>Arrow Handler Example 1</button>
                </div>
                <div>
                    <button onClick={this.arrowHandler2}>Arrow Handler Example 2</button>
                </div>
            </div>
        );
    }
}

export default ArrowFunction;