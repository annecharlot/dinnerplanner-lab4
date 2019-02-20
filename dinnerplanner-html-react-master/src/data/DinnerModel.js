import ObservableModel from "./ObservableModel";



const BASE_URL = `http://sunset.nada.kth.se:8080/iprog/group/44`;
const httpOptions = {
  headers: { "X-Mashape-Key": API_KEY }
};

class DinnerModel extends ObservableModel {
  constructor() {
    super();
    this._numberOfGuests = 1;
    this.getNumberOfGuests();
    this.menu = [];
    if(localStorage.getItem('menu')) {
      this.menu = JSON.parse(localStorage.getItem('menu'));
    }
  }

  /**
   * Get the number of guests
   * @returns {number}
   */
  getNumberOfGuests() {
    return localStorage.getItem("numberOfGuests");
  }

  /**
   * Set number of guests
   * @param {number} num
   */
  setNumberOfGuests(num) {
    if (num < 1) {
      this._numberOfGuests = 1;
      localStorage.setItem("numberOfGuests", this._numberOfGuests)
      this.notifyObservers();
    }
    else {
      this._numberOfGuests = num;
      localStorage.setItem("numberOfGuests", this._numberOfGuests)
      this.notifyObservers();
    }
  
  }

  addDishToMenu(new_dish) {
    for (let dsh of this.menu) {
      if (dsh.id == new_dish.id){
        this.menu.splice(this.menu.indexOf(dsh), 1);
      }
    }
      this.menu.push(new_dish);
     
        localStorage.setItem('menu', JSON.stringify(this.menu))

      this.notifyObservers();
}

  getTotalMenuPrice() {
    var price = 0;
    for(let dsh of this.menu){
      price += Math.round(dsh.pricePerServing*this.getNumberOfGuests());
    }
    return price;
  }

  getFullMenu() {
    return this.menu;
	}

  // API methods

  /**
   * Do an API call to the search API endpoint.
   * @returns {Promise<any>}
   */
  getAllDishes() {
    const url = `${BASE_URL}/recipes/search`;
    return fetch(url, httpOptions).then(this.processResponse);
  }

  searchAllDishes(type, filter) {
    if (filter===null) {
      const url = `${BASE_URL}/recipes/search?type=${type}`;
      return fetch(url, httpOptions).then(this.processResponse);
    }

    else {
      const url = `${BASE_URL}/recipes/search?type=${type}&query=${filter}`;
      return fetch(url, httpOptions).then(this.processResponse);
    }
  }

  getDish(id) {
    const url = `${BASE_URL}/recipes/${id}/information?includeNutrition=false`;
    return fetch(url, httpOptions).then(this.processResponse);
  }

  processResponse(response) {
    if (response.ok) {
      return response.json();
    }
    throw response;
  }
}

// Export an instance of DinnerModel
const modelInstance = new DinnerModel();
export default modelInstance;
