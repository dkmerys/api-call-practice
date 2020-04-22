export class WeatherService {
  async getWeatherByCity(city) {
    console.log('i am in the method')
    // console.log('process.env.API_KEY: ', process.env.API_KEY)
    try {
      let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);
      console.log('i got past the await');

      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch (error) {
      console.log('in the catch');

      return false;
    }
  }
}

// API_KEY = YOUR UNIQUE API KEY GOES HERE
// OTHER_API_KEY = OTHER UNIQUE API KEY GOES HERE