import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
    };
    console.log(` ${this.props.name} - Child Constructor called`);
  }

  //  async getUserInfo = ()=>{
  //     console.log("NNNN");
  //     const data = await fetch("https://api.github.com/users/riyaz1989");
  //     const json = await data.json;
  //   }

  async componentDidMount() {
    console.log(` ${this.props.name} - Child componentDidMount called`);
    // this.getUserInfo()
    const data = await fetch("https://api.github.com/users/riyaz1989");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    // console.log("json", json);
  }

  componentDidUpdate() {
    console.log("Child componentDidUpdate called");
  }

  componentWillUnmount() {
    console.log("Child componentWillUnmount called");
  }

  render() {
    console.log(` ${this.props.name} - "Child Renderd called"`);

    const { location } = this.props;
    const { name, bio, avatar_url, login } = this.state.userInfo;

    return (
      <div className="user-card">
        <h4>Functional Component</h4>
        <img
          src={avatar_url}
          className="user-img"
          style={{ height: "120px", width: "120px" }}
        />
        <h3>Name : {name}</h3>
        <h3>Bio : {bio}</h3>
        <h3>Location : {location}</h3>
        <h3>User Name : {login}</h3>
      </div>
    );
  }
}

export default UserClass;
