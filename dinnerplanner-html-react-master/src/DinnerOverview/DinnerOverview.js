import React, { Component } from "react";
import modelInstance from "../data/DinnerModel";
import { Link } from "react-router-dom";
import DinnerHeader from "../DinnerHeader/DinnerHeader";
import "./DinnerOverview.css"

class DinnerOverview extends Component {
 
  render() {
    
    let numberOfGuests = modelInstance.getNumberOfGuests();

    let menu = modelInstance.getFullMenu();

    let dishes = menu.map(dish => (
        <div>
            <img id='image' src={dish.image}/>
            <h3>{dish.title}</h3>
            <p>{Math.round(dish.pricePerServing * numberOfGuests)}</p>
        </div>
    ))

    return (
      <div class="row">
      <div className="DinnerHeader">
          <DinnerHeader model={this.props.model}/>
          </div>
        <h2>Dinner Overview</h2>
        
        <div className="DinnerOverview">
          {dishes}
    
            <Link to="/print">
              <button id="print">Print Full Recipe</button>
            </Link>
            
        </div>
      </div>
    );
  }
}

export default DinnerOverview;
