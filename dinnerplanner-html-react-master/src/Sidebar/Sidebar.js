import React, { Component } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import modelInstance from "../data/DinnerModel";


class Sidebar extends Component {
  constructor(props) {
    super(props);

    // we put on state the properties we want to use and modify in the component
    this.state = {
      numberOfGuests: this.props.model.getNumberOfGuests()
    };

  }

  // this methods is called by React lifecycle when the
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to setup model observer
  
  componentDidMount() {
    this.props.model.addObserver(this);
  }

  // this is called when component is removed from the DOM
  // good place to remove observer
  componentWillUnmount() {
    this.props.model.removeObserver(this);
  }

  // in our update function we modify the state which will
  // cause the component to re-render
  update() {
    this.setState({
      numberOfGuests: this.props.model.getNumberOfGuests()
    });
  }

  // our handler for the input's on change event
  onNumberOfGuestsChanged = e => {
    this.props.model.setNumberOfGuests(e.target.value);
  };

  removeFromMenu = (dish) => {
    modelInstance.removeDishFromMenu(dish);
  }

  render() {
    return (
      <div className="Sidebar">
        <h3>Sidebar</h3>
        <p>
          People:
          <input
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.onNumberOfGuestsChanged}
          />
          <br />
          Total number of guests: {this.state.numberOfGuests}
        </p>
        <div>
          
          Menu:{modelInstance.getFullMenu().map(dish => 
            <p>{dish.title} : {Math.round(dish.pricePerServing*this.state.numberOfGuests)} SEK
              <button onClick={() => this.removeFromMenu(dish)}>-</button></p>
            )}
          <div>Totalprice: {modelInstance.getTotalMenuPrice()} SEK</div>
        </div>
        <Link to="/dinneroverview">
          <button>Confirm Dinner</button>
        </Link>
      </div>
    );
  }
}

export default Sidebar;
