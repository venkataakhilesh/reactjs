import react, { Component } from "react";

class Greeting extends Component {
    render(){
        return <h1>hello,{this.props.name}</h1>
    }
}
export default Greeting