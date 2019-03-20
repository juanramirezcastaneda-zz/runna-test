export const fetchServerAction = () => dispatch => {
  dispatch({
    type: "FETCH_DATA_START"
  });

  setTimeout(() => {
    dispatch({
      type: "FETCH_DATA_END",
      payload: ["First", "Second", "Third"]
    });
  }, 1000);
};
