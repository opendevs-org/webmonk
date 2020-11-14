import React from 'react';
import Child from './Child'

class LifeCycleDemo extends React.Component {
    constructor() {
        super()
        console.log("[constructor]");
        this.state = {
            counter: 0,
            showChild : true
        }
        // this.onDecrease = this.onDecrease.bind(this);
    }
    componentDidMount() {
        console.log("[componentDidMount]");
    }
    componentDidUpdate() {
        console.log("[componentDidUpdate]");
    }
    componentWillUnmount() {
        console.log("[componentWillUnmount]");
    }

    onIncrease = (event, id) => {
        // this.state.counter++;
        console.log('INCREMENT');
        this.setState({
            counter: this.state.counter + 99
        })
    }
    onDecrease(event) {
        console.log("DECREASE")
        this.setState({
            counter: this.state.counter - 1
        })
    }

    toggleChild = () => {
        // this.state.showChild = false;
        this.setState({showChild : !this.state.showChild})
    }
    render() {
        console.log("[render]")
        return (
            <div>
                <p>Life Cycle is in progress...</p>
                <p>Counter : {this.state.counter} </p>
                <button onClick={(event) => this.onIncrease(event, 99)} >Increase</button>
                {/* <button onClick={this.onDecrease.bind(this)} >Decrease</button> */}
                <button onClick={(event) => this.onDecrease(event)} >Decrease</button>

                <button onClick = {this.toggleChild}>Toggle Child</button>

                {/* {child} */}

                {this.state.showChild ? <Child /> : null}
            </div>

        )
    }
}

export default LifeCycleDemo;