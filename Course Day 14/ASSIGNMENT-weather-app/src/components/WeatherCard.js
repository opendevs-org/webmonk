import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Divider,
    Typography,
} from "@material-ui/core";

import Forecast from "./Forecast";
import WeatherCardSubheader from "./WeatherCardSubheader";

const useStyles = makeStyles((theme) => ({
    atmospheric: {
        fontSize: "28px",
        padding: "5px",
    },
    card: {
        minWidth: 400,
        minHeight: 400,
    },
    recommendation: {
        fontFamily: "Montserrat, sans-serif",
        padding: "20px 0px 10px 0px",
        fontSize: "26px",
        textAlign: "center",
    },
    wi: {
        color: "#673ab7",
    },
}));

//NOTE: separate the CardHeader component, CardContent Component into their own separate components, take care of all the props required.

const WeatherCard = props => {
    const classes = useStyles();
    const humidity = "wi wi-humidity";
    const strongWind = "wi wi-strong-wind";
    const { currentWeather, forecast, icon, recommendation } = props;

    return (
        <Card className={classes.card}>
            <CardHeader
                title={currentWeather.city + ", " + currentWeather.country}
                subheader={
                    <WeatherCardSubheader currentWeather={currentWeather} />
                }
            />
            <CardContent>
                <CardMedia
                    className={`${icon} ${classes.wi}`}
                    src={icon}
                    style={{ fontSize: "128px", float: "right" }}
                />
                <Typography
                    variant="h2"
                    className="big-temp"
                    color="textPrimary"
                    component="h2"
                    style={{ fontFamily: "Montserrat", paddingTop: "30px" }}
                >
                    {Math.round(currentWeather.temperature - 273)}&deg;C
                </Typography>
                <Typography
                    variant="subtitle2"
                    className="atmospheric-conditions"
                    color="textSecondary"
                    gutterBottom
                    style={{ paddingTop: "40px" }}
                >
                    <span
                        className={`${strongWind} ${classes.wi} ${classes.atmospheric}`}
                    ></span>
                    {currentWeather.wind_speed} km/h Winds{" "}
                    <span
                        className={`${humidity} ${classes.wi} ${classes.atmospheric}`}
                    ></span>
                    {currentWeather.humidity}% Humidity
                </Typography>
                <Typography
                    className={`${classes.recommendation} recommendation`}
                    color="textPrimary"
                    gutterBottom
                >
                    {recommendation}
                </Typography>
                <Divider variant="middle" />
                <Forecast forecast={forecast} />
            </CardContent>
        </Card>
    );
};

export default WeatherCard;
