import React, { Component } from "react";
import modelInstance from "../data/DinnerModel";
import { Link } from "react-router-dom";
import DinnerHeader from "../DinnerHeader/DinnerHeader";



class DinnerPrintout extends Component {
 
  render() {
    
    let numberOfGuests = modelInstance.getNumberOfGuests();

    let menu = modelInstance.getFullMenu();

    let dishes = menu.map(dish => (
        <div>
            <img id='image' src={dish.image}/>
            <h3>{dish.title}</h3>
            <p>{Math.round(this.state.dish.pricePerServing * numberOfGuests)}</p>
        </div>
    ))

    return (
      <div class="row">
        <div className="DinnerHeader">
          <DinnerHeader model={this.props.model}/>
          </div>
        <h2>Dinner Printout</h2>
        
        <div className="DinnerPrintout">
          {dishes}
            
        </div>
      </div>
    );
  }
}

export default DinnerPrintout;
