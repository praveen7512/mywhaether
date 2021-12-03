import React from 'react';
import Form from './app_components/form.components';
import './App.css';
import 'weather-icons/css/weather-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wheather from './app_components/weather.components';

const API_key ="6631ebb242c18eb44671f640168d6d82";

class App extends React.Component {
  constructor(){
    super();
    this.state={
      city:undefined,
      country :undefined,
      celsius:undefined,
      temp_max:undefined,
      temp_min:undefined,
      description:undefined,
      icon :undefined,
      error:false,
    };
    

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    };
  }
  get_WeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: icons.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: icons.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: icons.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: icons.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clouds });
    }
  }

  calCelsius(value){
    let cell = Math.floor(value-273);
    return cell;
  }

  

  getweather = async(e)=>{
    console.log("click huya hai")
    e.preventDefault();

    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;

    
         try {
          if(city && country){
            const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`);
        
            const response = await api_call.json();
        
            console.log(response);
        
            this.setState({
              city :response.name,
              country:response.sys.country,
              description:response.weather[0].description,
              temp_max:response.main.temp_max,
              temp_min:response.main.temp_min,
              celsius:this.calCelsius(response.main.temp),
          
            });
        
            this.get_WeatherIcon(this.weatherIcon,response.weather[0].id)
          }
        
          else{
            this.setState({
              error:true
            })
          }
         } catch (error) {
          window.alert("please enter valid city and country");
         }
   }

  

  render() {
    return (
      <div className="App">
        <Form loadWeather={this.getweather}/>
      <Wheather
       city={this.state.city}
       country ={this.state.country}
      description={this.state.description}
      temp_max={this.state.temp_max}
      temp_min={this.state.temp_min}
      celsius={this.state.celsius}
      icon={this.state.icon}
 
      />
     
     </div>
    )
  }
}







export default App;
