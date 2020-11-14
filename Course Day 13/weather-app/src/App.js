import { useState } from 'react';

const App = () => {
  
  const cityName = 'Patna';
  let [weather, setWeather] = useState(null);

  const getWeather = async city => {
    try {
      let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_APIKEY}`)
      if (response.ok) {
        response = await response.json();
      } else {
        throw new Error('ERROR in getting data');
      }
      console.log(response);
    
      setWeather(JSON.stringify(response));

      console.log(weather);
      return JSON.stringify(weather);
      
    } catch (error) {
      console.error(error);
    }
  
  };

  getWeather(cityName);

  return (
    <div className="App">
      Hi there!
      <p>{ weather }</p>
    </div>
  );
}


export default App;
