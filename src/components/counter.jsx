import React, { Component } from 'react';

 export class Counter extends Component {
    render() {
        return (   
            <div>
             <button
                onClick={() => this.props.onReset()}
                className="btn btn-primary btn-sm m-2">Reset</button>
                {this.renderCounters()}
            </div>
        );
    }

    renderCounters(){
        return this.props.counter.map((value,i) => {
            return (   
                <div>
                   <span className={this.getBadgeClasses(i)}>{this.formatCount(i)}</span>
                   <button 
                   onClick={() => this.props.onIncrement(i)}
                   className="btn btn-secondary btn-sm"> Increment </button>
                   <button
                    onClick={() => this.props.onDelete(i)}
                    className="btn btn-danger btn-sm m-2"
                    >Delete
                    </button>
                </div>
                );
        })
    }

    getBadgeClasses(i) {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter[i] === 0 ? "warning" : "primary");
        return classes;
    }

   formatCount(i){
       const value = this.props.counter[i];
       return value === 0 ? 'zero' : value;
   }
}

 
