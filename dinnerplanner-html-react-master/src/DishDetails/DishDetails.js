import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import modelInstance from "../data/DinnerModel";
import "./Dishdetails.css";



class DishDetails extends Component {
    constructor(props) {
        super(props);
        // We create the state to store the various statuses
        // e.g. API data loading or error
        this.state = {
          status: "LOADING",
          
        };
      }
    
    componentDidMount() {
    // when data is retrieved we update the state
    // this will cause the component to re-render
    modelInstance
      .getDish(2)
      .then(dish => {
        this.setState({
          status: "LOADED",
          dish: dish
        });
      })
      .catch(() => {
        this.setState({
          status: "ERROR"
        });
      });
  }
    
  render() {

    let dishimage = null;
    let dishtitle = null;
    let preparation = null;
    let ingredients = null;
    let totalprice = null;
    let number = modelInstance.getNumberOfGuests();

    // depending on the state we either generate
    // useful message to the user or show the list
    // of returned dishes
    switch (this.state.status) {
      case "LOADING":
        dishimage = <em>Loading...</em>;
        break;
      case "LOADED":
      
      dishimage = <img id='image' src={this.state.dish.image}/>
      dishtitle = <h3>{this.state.dish.title}</h3>
      preparation = <p>{this.state.dish.instructions}</p>
    
      ingredients = this.state.dish.extendedIngredients.map(ing => (
        <div>
            {Math.round(ing.measures.metric.amount * number)}
            {ing.measures.metric.unitShort} 
            {ing.originalName}
        </div>  
      ));

      totalprice = this.state.dish.pricePerServing * number; 
        
        
        break;
      default:
        dishimage = <b>Failed to load data, please try again</b>;

        break;
    }

    return (
      <div class="row">
      <div className="Sidebar">
        <h2>DISH DETAILS</h2>
        <Sidebar model={this.props.model} />
        </div>
      <div className="DishDetails">
        <h3>{dishtitle}</h3>
        <ul>{dishimage}</ul>
        {preparation}
        <h4>Ingredients: </h4>
        {ingredients}
        <ul>Totalprice: {totalprice}</ul>
      </div>
      
      </div>
    );
  }
}

export default DishDetails;