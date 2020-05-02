import React, { Component } from "react";
import Lists from "../lists/lists";
import "./home.css";
class Home extends Component {
  state = {
    lists: [
      {
        id: 1,
        description: "New list",
      },
    ],
    description: "",
  };
  render() {
    return (
      <div className="todo-Container">
        <div className="d-flex">
          <input
            type="text"
            value={this.state.description}
            name="description"
            onChange={this.handleChange}
          />
          <button onClick={this.AddTolist}>Add</button>
        </div>
        <Lists
          onUpdate={this.handleUpdate}
          onDelete={this.handleDelete}
          myLists={this.state.lists}
        />
      </div>
    );
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleUpdate = (id) => {
    console.log(id);
  };
  handleDelete = (id) => {
    const lists = this.state.lists.filter((list) => list.id !== id);
    this.setState({
      lists,
    });
  };
  AddTolist = () => {
    if (this.state.description === "") return;
    let lastId = 0;
    if (this.state.lists.length > 0) {
      lastId = this.state.lists.slice(-1)[0].id;
    }
    const lists = this.state.lists;
    lists.push({
      id: lastId + 1,
      description: this.state.description,
    });
    this.setState({
      lists,
      description: "",
    });
  };
}

export default Home;
