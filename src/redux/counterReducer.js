//Increment Action => pass into the reducer
function increment() {
  return {
    type: "INCREMENT",
  };
}
function decrement() {
  return {
    type: "DECREMENT",
  };
}
//pure function
//takes in the state and an action
//returns new state
function counterReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      const newState = state + 1;
      return newState;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}
