import { useState, useEffect } from "react";
import { createMuiTheme, Container, ThemeProvider } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import CssBaseline from "@material-ui/core/CssBaseline";

import AppLayout from "./AppLayout";

const App = () => {
    const [city, setCity] = useState("Ranchi");
    const [error, setError] = useState(null);
    const [currentWeather, setCurrentWeather] = useState(null);

    // Forecast code
    const [forecast, setForecast] = useState([]);

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
                '"Segoe UI Symbol"',
            ].join(","),
            fontSize: 14,
            h5: {
                fontWeight: 600,
            },
        },
    });

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

        // Forecast code
        // Add extra properties for the five day forecast: dt_txt, icon, min, max
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

        // remove undefined fields
        Object.keys(mapped).forEach(
            (key) => mapped[key] === undefined && delete data[key]
        );

        return mapped;
    };

    const handleResponse = (response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(
                "Error: Location " + response.statusText.toLowerCase()
            );
        }
    };

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

    // Forecast code
    function getForecast(city) {
        return fetch(
            `${process.env.REACT_APP_API_URL}/forecast/?q=${city}&units=metric&APPID=${process.env.REACT_APP_APIKEY}`
        )
            .then((res) => handleResponse(res))
            .then((result) => {
                console.log(result);
                if (Object.entries(result).length) {
                    const forecast = [];
                    console.log(result.list);
                    for (let i = 0; i < result.list.length; i += 8) {
                        forecast.push(
                            mapDataToWeatherInterface(result.list[i + 4])
                        );
                    }
                    return forecast;
                }
            });
    }

    const handleCityChange = (city) => {
        setCity(city);
    };

    useEffect(() => {
        getWeather(city)
            .then((weather) => {
                setCurrentWeather(weather);
                setError(null);
            })
            .catch((err) => setError(err.message));
    }, [city, error]);

    // Forecast code
    useEffect(() => {
        getForecast(city)
            .then((data) => {
                setForecast(data);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
            });
    }, [city, error]);

    if (
        (currentWeather && Object.keys(currentWeather).length) ||
        (forecast && Object.keys(forecast).length)
    ) {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth="sm">
                    <AppLayout
                        city={city}
                        currentWeather={currentWeather}
                        forecast={forecast}
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
};

export default App;
