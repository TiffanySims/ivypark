export default function(state = {}, action) {
    switch (action.type) {
      case "Item_SELECTED":
     
        return {...state, product:action.payload};
    }
  
    return state;
  }
  