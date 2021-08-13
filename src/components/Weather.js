import react from 'react';

class Weather extends react.Component {
  render() {
    return (
      <div>
        {this.props.weatherStatus.map(element => {
          return (
            <>
              <br />
              
              <h3>{element.date}</h3>
              <h3>{element.description}</h3>
            </>
          )
        })}

      </div>
    )
  }
}
export default Weather;