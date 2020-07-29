const counters = [0,0,0,0];
const counterReducer = (state = counters, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state.map((value, i) => {
        if (action.payload.index === i) {
          return (state[i] += 1);
        }
        return value;
      });
    case "DELETE":
      //const count = state.filter(val => val.index !== action.index);
      const count = [...state.filter((elem, idx) => {
          return idx !== action.index
      })];
      return count;
    case "RESET":
      const counter = [...state.map((c,i) => {
        return state[i] = 0;
      })];
      return counter;
    default:
      return state;
  }
};

export default counterReducer;
