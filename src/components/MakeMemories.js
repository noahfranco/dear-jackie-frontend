import React, { Component } from "react";
import makeMemoriesAction from "../redux/actions/makeMemoriesAction.js";
import { connect } from "react-redux";

class MakeMemories extends Component {
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

  // function that calls memorie action where end point is being called 
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.makeMemoriesAction(this.state);
    console.log(this.state);
    console.log("clicked");
    this.props.history.push("/viewdata");
  };

  // funciton keeps track of state change
  handleChange = (event) => {
    console.log(event);
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  render() {
    // console.log(this.state);
    return (
      <div>
        <h4> Make Memories </h4>
        <form>
          <input
            placeholder="title"
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            placeholder="data"
            name="date"
            type="text"
            value={this.state.date}
            onChange={this.handleChange}
          />
          <input
            placeholder="description"
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <input
            name="longitude"
            placeholder="longitude"
            type="test"
            value={this.state.longitude}
            onChange={this.handleChange}
          />
          <input
            name="latitude"
            placeholder="latitude"
            type="test"
            value={this.state.latitude}
            onChange={this.handleChange}
          />
          <div>
            <button type="submit" onClick={this.handleSubmit}>
              {" "}
              Submit{" "}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

// bind our redux state from the store to our actions state so we can pass it through this component
const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};
export default connect(mapStateToProps, { makeMemoriesAction })(MakeMemories);
