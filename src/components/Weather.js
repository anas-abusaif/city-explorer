import react from 'react';

class Weather extends react.Component {
  render() {
    return (
      <div>
        {this.props.weatherStatus.map(element => {
          return (
            <>
              <br />
              <h2>{element.date}</h2>
              <h2>{element.description}</h2>
            </>
          )
        })}

      </div>
    )
  }
}
export default Weather;