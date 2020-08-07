import React, { Component } from "react";
import axios from "axios";

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

  handleChange() {
    axios
      // call the get API from database and assign dynamic state
      .post("http://localhost:5000/api/event/marker")
      .then((res) => {
        console.log("our data", res.state);
        this.setState(res.state);
      })
      .catch((error) => {
        console.log({ message: "hit catch" }, error);
      }, []);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div>
        <h4> Make Memories </h4>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="title"
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            placeholder="data"
            name="data"
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
            <button type="submit"> Submit </button>
          </div>
        </form>
      </div>
    );
  }
}

// bind state here from our actions compoenet
export default MakeMemories;
