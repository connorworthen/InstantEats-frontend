
export function fetchMenus() {
  return (dispatch) => {
    fetch('http://localhost:3001/api/v1/menus')
    .then(resp => resp.json())
    .then(menus => dispatch({
      type: 'FETCH_MENUS',
      payload: menus
    }))
  }
}