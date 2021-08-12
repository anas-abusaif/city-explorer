import axios from 'axios';
import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import Weather from './components/Weather'

class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 0,
      lon: 0,
      cityName: "",
      weatherStatus: []
    }
  }

  submitHandler = (e) => {
    e.preventDefault();
    axios.get(`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LocationKey}&q=${e.target.city.value}&format=json`).then((recivedData) => {
      let response = recivedData.data[0];

      this.setState({
        lat: response.lat,
        lon: response.lon,
        cityName: response.display_name
      })

    }
    );

    axios.get(`https://anas-weather-api.herokuapp.com/weather?searchQuery=${e.target.city.value}`).then(recivedData => {
    console.log(recivedData.data);  
    this.setState({
        weatherStatus: recivedData.data
      })
    })

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
        <br />
        <Container>
          <Row>
            <Col xs={1}>
              <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LocationKey}&center=${this.state.lat},${this.state.lon}&zoom=1-18`} alt="" />
            </Col>
          </Row>
        </Container>
        <Weather weatherStatus={this.state.weatherStatus}/>

      </>
    )
  }

}
export default App;