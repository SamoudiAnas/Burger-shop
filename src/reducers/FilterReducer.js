function FiltersReducer(state = {}, action) {
  switch (action.type) {
    case "LOAD_BURGERS":
      //load the burgers into the lists
      state = { ...state, burgers: [...action.payload] };
      state = { ...state, allBurgers: [...action.payload] };

      //calculate the max price in the list
      let arrayOfPrices = [];
      state.allBurgers.forEach((burger) => {
        arrayOfPrices.push(burger.price);
      });
      let max = Math.max(...arrayOfPrices);

      //set the max price
      state = { ...state, max_price: max };

      //set the price to the max price by default
      state = { ...state, price: max };

      return state;

    case "UPDATE_FILTERS":
      //set the new value in the state
      const { name, value } = action.payload;
      state = { ...state, [name]: value };
      let tempArray = [...state.allBurgers];

      //filter by text
      if (state.text) {
        //get the input length
        let textLength = value.length;

        //filter according to the length
        tempArray = tempArray.filter(
          (burger) =>
            burger.name.substring(0, textLength).toLowerCase() ===
            value.toLowerCase()
        );
      }

      //filter by category
      if (state.category !== "All") {
        //filter according to the length
        tempArray = tempArray.filter(
          (burger) => burger.category === state.category
        );
      }

      //filter by price
      tempArray = tempArray.filter((burger) => burger.price <= state.price);

      //set the results
      state = { ...state, burgers: [...tempArray] };

      //filter by price
      return state;

    case "CLEAR_FILTERS":
      //reset the price
      state = { ...state, price: state.max_price };

      //reset the category in the filter
      state = { ...state, category: "All" };

      //reset the results
      state = { ...state, burgers: [...state.allBurgers] };

      return state;

    default:
      return state;
  }
}

export default FiltersReducer;
