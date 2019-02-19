import React, { Component } from "react";
import { Route } from "react-router-dom";
import Welcome from "./Welcome/Welcome";
import modelInstance from "./data/DinnerModel";
import SelectDish from "./SelectDish/SelectDish";
import DishDetails from "./DishDetails/DishDetails";
import DinnerOverview from "./DinnerOverview/DinnerOverview";
import DinnerPrintout from "./DinnerPrintout/DinnerPrintout";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Dinner Planner"
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 id="title" className="App-title">{this.state.title}</h1>

          {/* We rended diffrent component based on the path */}
          <Route exact path="/" component={Welcome} />
          <Route
            path="/search"
            render={() => <SelectDish model={modelInstance} />}
          />
          <Route
            path="/dishdetails/:dishId"
            render={(props) => <DishDetails info={props} model={modelInstance}/>}
          />
          <Route
            path="/dinneroverview"
            render={() => <DinnerOverview model={modelInstance}/>}
          />
          <Route
            path="/print"
            render={() => <DinnerPrintout model={modelInstance}/>}
          />
        </header>
      </div>
    );

    const props = ({ match }) => (
      <div>{match.props.dishId}</div>
    )
  }
}


export default App;
