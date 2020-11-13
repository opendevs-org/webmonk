import React from 'react';

class Child extends React.Component{
    componentWillUnmount () {
        console.log("[Child - componentWillUnmount]");
    }
    componentDidMount (){
        console.log("[Child - componentDidMount]")
    }
    render(){
        console.log("[Child - render]")
        return (
            <div>
                Child Loaded...
            </div>
        )
    }
}

export default Child;