import React, { Component } from "react";
import { Link } from "react-router-dom";
import modelInstance from "../data/DinnerModel";
import "./DinnerHeader.css";



class DinnerHeader extends Component {

  render() {
    return (
      <div class="row">
        <div class='col-xs-12 col-md-6'>
                <h3>My Dinner: {modelInstance.getNumberOfGuests()} People</h3>
        </div>
        <div class='col-xs-6 col-md-6'>
            <Link to="/search">
                <button id="backandedit">Go back and edit dinner</button>
            </Link>
        </div> 
      </div>
      
    );
  }
}

export default DinnerHeader;
