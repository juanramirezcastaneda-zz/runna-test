export const fetchServerAction = () => dispatch => {
    dispatch({
     type: 'FETCH_DATA_START',
     payload: 'This is the result of the first action'
    })
   }