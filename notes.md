componentDidMount() {
fetch('http://localhost:3000/api/v1/restaurants')
.then(resp => resp.json())
.then(data => console.log(data[0].name))
}
