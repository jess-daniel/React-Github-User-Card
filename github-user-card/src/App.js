import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import UserCard from "./components/UserCard";
import SearchForm from "./components/SearchForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: [],
      query: ""
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/jess-daniel")
      .then(res => {
        console.log(res.data);
        this.setState({
          user: res.data
        });
      })
      .catch(err => console.log(err));

    axios
      .get("https://api.github.com/users/jess-daniel/followers")
      .then(res => {
        console.log(res);
        this.setState({
          followers: res.data
        });
      })
      .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      axios
        .get(`https://api.github.com/users/${this.state.query}`)
        .then(res => {
          console.log(res);
          this.setState({
            user: res.data
          });
        })
        .catch(err => console.log(err));
      axios
        .get(`https://api.github.com/users/${this.state.query}/followers`)
        .then(res => {
          console.log(res);
          this.setState({
            followers: res.data
          });
        })
        .catch(err => console.log(err));
    }
  }

  handleChanges = e => {
    this.setState({
      query: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <SearchForm
          query={this.state.query}
          handleChanges={this.handleChanges}
          update={this.componentDidUpdate}
        />
        <UserCard user={this.state.user} followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
