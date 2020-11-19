import { useState, useEffect } from "react";
import { createMuiTheme, Container, ThemeProvider } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import CssBaseline from "@material-ui/core/CssBaseline";

import AppLayout from "./AppLayout";

//NOTE: Code to format data and get the required keys from it for weather & forecast
const mapDataToWeatherInterface = (data) => {
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

    //NOTE: Add extra properties for the five day forecast: dt_txt, icon, min, max
    if (data.dt_txt) {
        mapped.dt_txt = data.dt_txt;
    }

    if (data.weather[0].icon) {
        mapped.icon = data.weather[0].icon;
    }

    if (data.main.temp_min && data.main.temp_max) {
        mapped.max = data.main.temp_max;
        mapped.min = data.main.temp_min;
    }

    //NOTE: remove undefined fields
    Object.keys(mapped).forEach(
        (key) => mapped[key] === undefined && delete data[key]
    );

    return mapped;
};

//NOTE: Code to handle response of API calls, can be used by any function doing API calls
const handleResponse = (response) => {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error(
            "Error: Location " + response.statusText.toLowerCase()
        );
    }
};

//NOTE: Code to fetch the current weather data of a city & on success, get the parsed data from mapDataToWeatherInterface & return it.
const getWeather = (city) =>
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_APIKEY}`
    )
    .then((res) => handleResponse(res))
    .then((weather) => {
        if (Object.entries(weather).length) {
            const mappedData = mapDataToWeatherInterface(weather);
            return mappedData;
        }
    });

//NOTE: Code to fetch the forecast data of a city & on success, get the parsed data from mapDataToWeatherInterface & return it.
const getForecast = (city) => 
    fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${process.env.REACT_APP_APIKEY}`
    )
    .then((res) => handleResponse(res))
    .then((result) => {
        if (Object.entries(result).length) {
            const forecast = []; //Note: Forecast Data is an array of data
            for (let i = 0; i < result.list.length; i += 8) { //NOTE: openweathermap provides 8 different time data for each day's forecast, i.e. for Monday it provides data of 3:00AM, 6:00AM & so on.. To get unique data of each day, increment by 8
                forecast.push(
                    mapDataToWeatherInterface(result.list[i + 4]) //NOTE: as we have 8 different time's data of each day, 4th one is 12th hour so i + 4
                );
            }
            return forecast;
        }
    });

const theme = createMuiTheme({ //NOTE: creating a theme for the application with font-family, font-size & some other properties.
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
            '"Segoe UI Symbol"',
        ].join(","),
        fontSize: 14,
        h5: {
            fontWeight: 600,
        },
    },
});

const App = () => {
    //NOTE: States of our code city, forecast, error if any & currentWeather for current weather data
    const [city, setCity] = useState("Ranchi");
    const [error, setError] = useState(null);
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState([]);

    //NOTE: useEffect hook to call the weather & forecast APIs on city change, this will run on componentDidMount once & componentDidUpdate on every city input changes
    useEffect(() => {
        getWeather(city)
            .then((weather) => {
                setCurrentWeather(weather);
                setError(null);
            })
            .catch((err) => setError(err.message));
        
        getForecast(city)
            .then((data) => {
                setForecast(data);
                setError(null);
            })
            .catch((err) => setError(err.message));
    }, [city]);

    if (
        (currentWeather && Object.keys(currentWeather).length) ||
        (forecast && Object.keys(forecast).length)
    ) { //NOTE: if currentWeather & forecast data exists
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth="sm">
                    <AppLayout
                        city={city}
                        currentWeather={currentWeather}
                        forecast={forecast}
                        onCityChange={setCity}
                        error={error}
                    />
                </Container>
            </ThemeProvider>
        );
    } else { //NOTE: if loading or error show err
        return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="sm" style={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <CircularProgress color={error ? "secondary" : "primary"} />
                {error ? <p>{error}</p> : ""}
            </Container>
        </ThemeProvider>
        );
    }
};

export default App;
