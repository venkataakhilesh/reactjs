import React, {Component}from "react";


class Profile extends Component{

    constructor(){
        super();
        this.state ={
            username:"jhon",
            age:"30",
        };
        console.log("constructer:state initislized");
    }


   componentDidMount(){
    console.log("ComponentDidMount");
    setTimeout(() => {
      this.setState({age:31});
      console.log("data fetched:state updated");
    }, 2000);
   }

   shouldComponentUpdate(){
    return true;
   }
   componentDidUpdate(prevstate){
    console.log("component did updated");
    if(prevstate.age !== this.state.age)
        console.log(`age updated form ${prevstate.age}to $ {this.state.age}`);
   }
   componentWillUnmount(){
    console.log("component removed");
   }


    render(){
        console.log("render:rendering the component");
        return(
        <>
        <div>
          <h2>username:{this.state.username}</h2>
            <h4>age:{this.state.age}</h4>
        </div>
        </>
     );
    };
   
};
export default Profile;