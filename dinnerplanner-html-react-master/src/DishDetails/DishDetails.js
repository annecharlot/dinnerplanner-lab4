import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import modelInstance from "../data/DinnerModel";
import "./Dishdetails.css";
import { Link } from "react-router-dom";

class DishDetails extends Component {
    constructor(props) {
        super(props);
        // We create the state to store the various statuses
        // e.g. API data loading or error
        this.state = {
          status: "LOADING",
          numberOfGuests: this.props.model.getNumberOfGuests(),
          id: this.props.info.match.params.dishId
        };
      }
    
    /*this.props.match.dishId 
    const dish_id = ({ match }) => (
      {match.props.dishId}
    )
    */
    
      componentDidMount() {
    // when data is retrieved we update the state
    // this will cause the component to re-render
    modelInstance
      .getDish(this.state.id)
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
  
  update() {
    this.setState({
      numberOfGuests: this.props.model.getNumberOfGuests()
    })
  }

  render() {

    let dishimage = null;
    let dishtitle = null;
    let preparation = null;
    let ingredients = null;
    let totalprice = null;

    // depending on the state we either generate
    // useful message to the user or show the list
    // of returned dishes
    switch (this.state.status) {
      case "LOADING":
        dishimage = <em>Loading...</em>;
        break;
      case "LOADED":
      
      dishimage = <img id='detailimage' src={this.state.dish.image}/>
      dishtitle = <h3>{this.state.dish.title}</h3>
      preparation = <p id="preparation">{this.state.dish.instructions}</p>
    
      ingredients = this.state.dish.extendedIngredients.map(ing => (
        <div>
            <p>{Math.round(ing.measures.metric.amount * this.state.numberOfGuests)}{ing.measures.metric.unitShort} {ing.originalName}</p>
            <div>{this.state.numberOfGuests} SEK</div>
        </div>  
      ));

      totalprice = Math.round(this.state.dish.pricePerServing * this.state.numberOfGuests); 
        
        
        break;
      default:
        dishimage = <b>Failed to load data, please try again</b>;

        break;
    }


    return (
      <div class="row">
        <h2>DISH DETAILS</h2>
        
        <div class="col-md-2">
          <div className="Sidebardetail">
            <Sidebar model={this.props.model}/>
           </div>
        </div>
        
        <div class="col-xs-12 col-md-5">
          <div id="DishDetails">
            <h3>{dishtitle}</h3>
            <ul>{dishimage}</ul>
            <p>{preparation}</p>
            <Link to="/search">
            <button>back to search</button>
            </Link>
          </div>
        </div>

        <div class="col-xs-12 col-md-5">
          <div id="ingredientscreen">
              <h4>Ingredients: </h4>
              {ingredients}
              Number of Guests: {this.state.numberOfGuests}
              <div id="totalprice">Totalprice: {totalprice} SEK</div>
              <Link to="/search">
                <button>Add to Menu</button>
              </Link> 
            </div>  
        </div>
          
        
      </div>
    );
  }
}

export default DishDetails;
/* modelInstance.addObserver(this) */
