
export function fetchRestaurants() {
  return (dispatch) => {
    fetch('http://localhost:3001/api/v1/restaurants')
    .then(resp => resp.json())
    .then(restaurants => dispatch({
      type: 'FETCH_RESTAURANTS',
      payload: restaurants
    }))
  }
}