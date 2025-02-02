import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 500,
      count2:300,
      count3:234,
      count4:453
    };
    console.log(` ${this.props.name} - Child Constructor called`);

  }

  componentDidMount(){
    console.log(` ${this.props.name} - Child componentDidMount called`);
  }

  render() {

    console.log(` ${this.props.name} - "Child Renderd called"`);
    
    const { location } = this.props;
    const {count} = this.state;

    return (
      <div className="user-card">
        <h4>Functional Component</h4>
        <h3>Count: {this.state.count} {this.state.count2}</h3>
        <button 
          onClick={() => {
            // If we have multiple state variables then we will update them in object. We just pass the same object collection as we 
            // creaated for this.state above

            // If we have passed only 2 stated then rest count3, count4 will be untouched
            this.setState({
              count: count + 1,
              count2: this.state.count2 + 5
            })
          }}
        >
          Increse
        </button>
        {/* using with this.props */}
        <h3>Name : {this.props.name}</h3>
        {/* using with object destructring */}
        <h3>Location : {location}</h3>
        <h3>Contact : khanriyaz627@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
