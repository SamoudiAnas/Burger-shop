function CartReducer(state = {}, action) {
  switch (action.type) {
    case "LOAD_CART":
      if (localStorage.getItem("cart", JSON.stringify(state)) !== null) {
        //load the cart from the local storage
        state = JSON.parse(localStorage.getItem("cart", JSON.stringify(state)));
      }
      return state;

    case "ADD_ITEM":
      //check if item already exists
      let exists = false;
      state.items.forEach((item) => {
        if (item.food.id === action.payload.id) {
          exists = true;
          return;
        }
      });
      console.log(exists);
      if (exists === false) {
        //add the selected item to the cart list
        let array = [...state.items];
        array.push({
          id: Math.random() * 1000,
          food: action.payload,
          numberOfItems: 1,
        });

        //recalculate total price
        let total = 0;
        array.forEach((item) => {
          total += item.food.price * item.numberOfItems;
        });

        //set the new state values
        state = {
          items: [...array],
          itemsCount: state.itemsCount + 1,
          total: total,
        };

        localStorage.setItem("cart", JSON.stringify(state));
      }
      return state;

    case "REMOVE_ITEM":
      let tempArray = state.items.filter((item) => item.id !== action.payload);

      //recalculate the price
      let total = 0;
      tempArray.forEach((item) => {
        total += item.food.price * item.numberOfItems;
      });

      //set the new state values
      state = {
        items: tempArray,
        itemsCount: state.itemsCount - 1,
        total: total,
      };

      localStorage.setItem("cart", JSON.stringify(state));
      return state;

    case "ADD_TO_ITEM":
      const tempCart = state.items.map((item) => {
        if (item.id === action.payload) {
          let newAmount = item.numberOfItems + 1;
          return { ...item, numberOfItems: newAmount };
        }
        return item;
      });

      state = { ...state, items: tempCart };
      localStorage.setItem("cart", JSON.stringify(state));

      //recalculate total price
      let stotal = 0;
      state.items.forEach((item) => {
        stotal += item.food.price * item.numberOfItems;
      });
      state = {
        ...state,
        total: stotal,
      };
      return state;

    case "SUBTRACT_FROM_ITEM":
      const tempCart2 = state.items.map((item) => {
        if (item.id === action.payload) {
          if (item.numberOfItems > 1) {
            let newAmount = item.numberOfItems - 1;
            return { ...item, numberOfItems: newAmount };
          }
        }
        return item;
      });

      state = { ...state, items: tempCart2 };
      localStorage.setItem("cart", JSON.stringify(state));

      //recalculate total price
      let sutotal = 0;
      state.items.forEach((item) => {
        sutotal += item.food.price * item.numberOfItems;
      });
      state = {
        ...state,
        total: sutotal,
      };
      return state;

    default:
      return state;
  }
}

export default CartReducer;
