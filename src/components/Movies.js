import axios from 'axios';
import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Movies extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesData: []
    }
  }
  grtData = () => {
    axios.get(`https://anas-weather-api.herokuapp.com/movies?searchQuery=${this.props.subject}`).then(data => {
      this.setState({
        moviesData: data
      })
    })
  }

  render() {
    return (
      <>
        {
          this.state.moviesData.map(element => {
            return (
              <>
                <br />
                <h2>title: {element.title}</h2>
                <h2>overview: {element.overview}</h2>
                <h2>average votes: {element.average_votes}</h2>
                <h2>total votes: {element.total_votes}</h2>
                <h2>image url: {element.image_url}</h2>
                <h2>popularity: {element.popularity}</h2>
                <h2>released on: {element.released_on}</h2>
              </>
            )
          })
        }

      </>
    )
  }
}

export default Movies