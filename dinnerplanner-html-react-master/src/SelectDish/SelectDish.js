import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Dishes from "../Dishes/Dishes";
import "./SelectDish.css";

class SelectDish extends Component {

  constructor(props) {
    super(props);
    this.state = {
      type: "",
      filter: ""
    }
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
        <div class="row">
          <div class="col-md-3">
            <Sidebar model={this.props.model} />
          </div>
          <div class="col-md-9">
            <div class="row">
              <input type="text" onChange={this.filter}/>
              <select ref="typeinput" onChange={(e) => this.props.onTypeChange(e.target.value)}>
                <option>All</option>
                <option>appetizer</option>
                <option>main course</option>
                <option>dessert</option>
                <option>bread</option>
                <option>soup</option>
                <option>side dish</option>
                <option>breakfast</option>
                <option>salad</option>
                <option>beverage</option>
                <option>drink</option>
                <option>sauce</option>
              </select>
            </div>
            <div class="row">
              <Dishes />
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default SelectDish;
