import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
import DisplayComponent from './DisplayComponent';
export default class ParentComponent extends Component {
  constructor(props){
    super(props);

    //we are really in a *bind* here.... :)
    //fix it...

    //state lives here
    this.state = {
      whatToSay: "",
      whatWasSaid: "",
    }
  }
  handleInput = (e) => {
    e.preventDefault();
    //set the state on input change
    this.setState({whatToSay: e.target.value});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    //check console to see if firing
    console.log("fired");
    //set the state for props and for value (prevents output from appearing when typing)
    this.setState({whatToSay: '', whatWasSaid: this.state.whatToSay});
    //clear our input by resetting state


  }
  render() {
    const {whatWasSaid, whatToSay} = this.state;
    return (
      <div>Smart Component: I have a function, but something isn't working? I also need to pass that function to the ChildComponent.
        <div>
          <input onChange={this.handleInput} value={whatToSay} type="text" placeholder="Say It, Don't Spray It!" />
        </div>
        <div>
          <ChildComponent onClick={this.handleSubmit} />
          <DisplayComponent sayWhat={whatWasSaid} />
        </div>
      </div>
    );
  }
}
