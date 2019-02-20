import React, { Component } from "react";
import modelInstance from "../data/DinnerModel";
import { Link } from "react-router-dom";
import DinnerHeader from "../DinnerHeader/DinnerHeader";
import "./DinnerOverview.css"
import "../DinnerPrintout/DinnerPrintout.css";


class DinnerOverview extends Component {
 
  render() {
    
    let numberOfGuests = modelInstance.getNumberOfGuests();

    let menu = modelInstance.getFullMenu();

    let dishes = menu.map(dish => (
        <div id="dishoverview">
            <img id='image' src={dish.image}/>
            <h3>{dish.title}</h3>
            <p>{Math.round(dish.pricePerServing * numberOfGuests)} SEK</p>
        </div>
    ))

    return (
      <div class="row">
      <div className="DinnerHeader">
          <DinnerHeader model={this.props.model}/>
          </div>
        
        <div id="DinnerOverview">
          {dishes}
          <p id="price">Totalprice: {modelInstance.getTotalMenuPrice()} SEK</p>
            <Link to="/print">
              <button id="print">Print Full Recipe</button>
            </Link>
            
        </div>
      </div>
    );
  }
}

export default DinnerOverview;
