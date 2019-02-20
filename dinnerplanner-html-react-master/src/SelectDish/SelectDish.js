import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Dishes from "../Dishes/Dishes";
import "./SelectDish.css";
import SearchBar from '../Searchbar/Searchbar';

class SelectDish extends Component {

  constructor(props) {
    super(props);
    this.state = {
      type: "",
      filter: ""
    }
  }

  search = (type, filter)=> {
    this.setState({
      type: type,
      filter: filter
    })
  }

  /*onTypeChange(new_type) {
   this.setState({type: new_type})
   ropa på en funktion setType i modellen?
  }
  */

  render() {
    return (
      <div className="SelectDish">
        {/* We pass the model as property to the Sidebar component */}
        <div id="searchbar"><SearchBar whenSearch={this.search}/></div>
        <div id="row">
          <div className="col-md-3">
            <Sidebar model={this.props.model} />
          </div>
          <div className="col-md-9">
            <div id="row">
            
            <Dishes model={this.props.model} type={this.state.type} filter={this.state.filter}/>
            </div>
            
          </div>
        </div>
        
      </div>
    );
  }
}

export default SelectDish;
