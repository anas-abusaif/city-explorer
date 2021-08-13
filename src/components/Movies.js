import react from 'react';
class Movies extends react.Component {
  render() {
    return (
      <div>
        {
          this.props.moviesData.map(element => {
            return (
              <>
                <br />
                <h3>title: {element.title}</h3>
                <h3>overview: {element.overview}</h3>
                <h3>average votes: {element.average_votes}</h3>
                <h3>total votes: {element.total_votes}</h3>
                <h3>image url: {element.image_url}</h3>
                <h3>popularity: {element.popularity}</h3>
                <h3>released on: {element.released_on}</h3>
              </>
            )
          }

          )
        }
      </div>
    )
  }
}

export default Movies





