import React, { Component } from 'react';


class Checkout extends Component{

    state ={
        name: "",
        address: "",
        total: 0,
        wallet: 0,
        on: true
    }
    handleSubmit = (event) =>{
        this.setState({name: event.target.name.value, address: event.target.address.value})
        this.toggle()
    }

    toggle = () =>{
        this.setState({on: !this.state.on})
    }
  
render(){
    return(
        <>
        {this.state.on?
        <form className ="Checkout" onSubmit={this.handleSubmit}>
        <label> Name </label>
        <input type ="text" name="name" value={this.state.name}/>
        <label> Address </label>
        <input type ="text" name ="address" value={this.state.address}/>
        <input type="submit" value="Submit" />
        </form>
        :
        <h1>Thank for shopping with us {this.state.name}! Your purchase was processed and these items will get shipped to the address: {this.state.address}</h1>
        }
        </>
    )
}    
}
export default Checkout