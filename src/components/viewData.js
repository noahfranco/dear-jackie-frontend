import React, { Component } from "react";
import viewDataAction from "../redux/actions/viewDataAction.js";
import { connect } from "react-redux";

class viewData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      date: "",
      description: "",
      longitude: "",
      latitude: "",
    };
  }
  // set up state to accept JSON object from postData componenet

  // create a function to set set the our action to the state in the component
  handleData = (event) => {
    event.preventDefault();
    this.props.viewDataAction(this.state);
    // console.log(this.state);
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h4> View Caard Compoenent </h4>
        {/* map over viewCard component */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    card: state.card,
  };
};

export default connect(mapStateToProps, { viewDataAction })(viewData);
