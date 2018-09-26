import React, { Component } from "react";
import "./App.css";
import Title from "./components/title";
import Form from "./components/Form";
import Weather from "./components/Weather";
import "bootstrap/dist/css/bootstrap.min.css";

const API_key = "0399ca9cb0a04ccca9fa68463b9cade0";

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    //description: undefined,
    error: undefined
  };

  getweather = async e => {
    e.preventDefault();

    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;

    if (country || city) {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}&units=metric`
      );

      const data = await api_call.json();
      console.log(data);

      console.log(data.main.temp);
      //console.log(data.name);
      //console.log(data.sys.country);

      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        //description: data.weather[0].description,
        error: ""
      });
    } else {
      alert("Please fill out both Country & City");
      return false;

      // this.setState({
      //   temperature: undefined,
      //   city: undefined,
      //   country: undefined,
      //   humidity: undefined,
      //   error: "Please Enter chit"
      // });
    }

    console.log(this.state.error);
  };
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="container">
            <div className="row">
              <div id="title-container" className="col-xs-5">
                <Title />
              </div>

              <div className="col-xs-7 form-container">
                <Form getweather={() => this.getweather} />
                <Weather
                  temperature={this.state.temperature}
                  country={this.state.country}
                  city={this.state.city}
                  error={this.state.error}
                  humidity={this.state.humidity}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
