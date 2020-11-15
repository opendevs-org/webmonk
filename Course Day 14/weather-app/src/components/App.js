import { useState, useEffect } from 'react';
import { createMuiTheme, Container, ThemeProvider } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import CssBaseline from "@material-ui/core/CssBaseline";

import AppLayout from './AppLayout';

const App = () => {

  const [city, setCity] = useState("Ranchi");
  const [error, setError] = useState(null);
  let [currentWeather, setCurrentWeather] = useState(null);

  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(","),
      fontSize: 14,
      h5: {
        fontWeight: 600
      }
    }
  });

  const mapDataToWeatherInterface = data => {
    const mapped = {
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,
      humidity: data.main.humidity,
      icon_id: data.weather[0].id,
      temperature: data.main.temp,
      description: data.weather[0].description,
      wind_speed: Math.round(data.wind.speed * 3.6), // convert from m/s to km/h
    };

    // remove undefined fields
    Object.keys(mapped).forEach(
      key => mapped[key] === undefined && delete data[key]
    );

    return mapped;

  }

  const handleResponse = response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Error: Location " + (response.statusText).toLowerCase());
    }
  }

  function getWeather (city) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_APIKEY}`)
      .then(res => handleResponse(res))
      .then(weather => {
        if (Object.entries(weather).length) {
          const mappedData = mapDataToWeatherInterface(weather);
          return mappedData;
        }
      })
  };

  const handleCityChange = city => {
    setCity(city);
  };

  useEffect(() => {
    getWeather(city)
      .then(weather => {
        setCurrentWeather(weather);
        setError(null);
      })
      .catch(err => setError(err.message));
  }, [city, error])

  if (
    (currentWeather && Object.keys(currentWeather).length)
  ) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm">
          <AppLayout
            city={city}
            currentWeather={currentWeather}
            // forecast={forecast}
            onCityChange={handleCityChange}
            error={error}
          />
        </Container>
      </ThemeProvider>
    );
  } else {
    return (
      <div>
        <CircularProgress color={error ? "secondary" : "primary"} />
        {error ? <p>{error}</p> : ""}
      </div>
    );
  }

}


export default App;
