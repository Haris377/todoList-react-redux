export const increment = (index) => {
    return {
      type: "INCREMENT",
      payload: {index}
    };
  };
  export const deleteCounter = (index) => {
    return {
      type: "DELETE",
      index
    };
  };
  export const resetCounters = () => {
    return {
      type: "RESET"
    };
  };
  export const totalCounters = () => {
    return {
      type: "TOTAL_COUNTERS"
    }
  }