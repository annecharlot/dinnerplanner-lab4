import React, { Component } from 'react';

class SearchBar extends Component {

	constructor(props) {
      super(props);
    
  }

  filterchange = (e) => {
    this.props.whenSearch(this.refs.typeinput.value, this.refs.filterinput.value);
  }

  typechange = (e) => {	
    this.props.whenSearch(this.refs.typeinput.value, this.refs.filterinput.value);
  } 
  
  
  render() {
    return (
      <div className="SelectDish">
       
        <select ref="typeinput" onChange={this.typechange}>
          <option value="all">all</option>
          <option value="breakfast">breakfast</option>
          <option value="appetizer">appetizer</option>
          <option value="main course">main course</option>
          <option value="dessert">dessert</option>
          <option value="salad">salad</option>
          <option value="sauce">sauce</option>
          <option value="soup">soup</option>
          <option value="bread">bread</option>
          <option value="side dish">side dish</option>
          <option value="beverage">beverage</option>
          <option value="drink">drink</option>
        
        </select>

        <input ref="filterinput" onChange={this.filterchange}/>
      </div>
    );
  }
}

export default SearchBar;