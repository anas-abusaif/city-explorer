import axios from 'axios';
import react from 'react';

class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 0,
      lon: 0,
      cityName: ""
    }
  }

  submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.city.value);
    axios.get(`https://eu1.locationiq.com/v1/search.php?key=pk.e55482fdd20d00376e66ecdf5983b8a0&q=${e.target.city.value}&format=json`).then((recivedData) => {
      let response = recivedData.data[0];
      console.log(response);

      this.setState({
        lat: response.lat,
        lon: response.lon,
        cityName: response.display_name
      })

    }
    );
  }
  render() {
    return (
      <>
        <form onSubmit={(e) => this.submitHandler(e)}>
          <input type="text" placeholder="Enter City Name" id="city" />
          <input type="submit" value="Explore" />
        </form>
        <br />
        <h2>City Name: {this.state.cityName}</h2>
        <h2>Latitude: {this.state.lat}</h2>
        <h2>Longitude: {this.state.lon}</h2>

      </>
    )
  }

}
export default App;