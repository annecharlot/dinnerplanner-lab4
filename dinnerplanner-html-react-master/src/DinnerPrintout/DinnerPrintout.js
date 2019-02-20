import React, { Component } from "react";
import modelInstance from "../data/DinnerModel";
import { Link } from "react-router-dom";
import DinnerHeader from "../DinnerHeader/DinnerHeader";
import "./DinnerPrintout.css";



class DinnerPrintout extends Component {
 
  render() {
    
    let menu = modelInstance.getFullMenu();

    let dishes = menu.map(dish => (
        <div id="printdish">
            <div id="package">
              <img id='printimage' src={dish.image}/>
            </div>
            
            
            <div id="package">
              <h3>{dish.title}</h3>
              <p id="instruction">{dish.instructions}</p>
            </div>
            
        </div>
    ))

    return (
      <div class="row">
        <div className="DinnerHeader">
          <DinnerHeader model={this.props.model}/>
          </div>
        
        <div className="DinnerPrintout">
          {dishes}   
        </div>
      </div>
    );
  }
}

export default DinnerPrintout;
