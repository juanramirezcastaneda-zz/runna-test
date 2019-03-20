export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_DATA_START":
      return {
        result: action.payload
      };
    default:
      return state;
  }
};
