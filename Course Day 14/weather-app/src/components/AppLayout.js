import React from "react";

import Weather from "./Weather";
import WeatherSearch from "./WeatherSearch";

import * as weatherIcons from "../icons";
import * as recommendations from "../recommendations";

const AppLayout = (props) => {
    //NOTE: Destructuring & getting the props
    const { city, currentWeather, forecast, onCityChange, error } = props;

    if (currentWeather && forecast) {
        //NOTE: the prefix to use material-ui icons, much like fontawesome fa fa-something
        const prefix = "wi wi-";
        
        //NOTE: Code to get the icon & recommendation from icons.json & recommendations.json respectively
        const icon = prefix + weatherIcons.default[currentWeather.icon_id].icon;
        const recommendation =
            recommendations.default[currentWeather.icon_id].recommendation;

        return (
            <>
                <WeatherSearch
                    city={city}
                    onCityChange={onCityChange}
                    error={error}
                />
                <Weather
                    currentWeather={currentWeather}
                    forecast={forecast}
                    icon={icon}
                    recommendation={recommendation}
                    error={error}
                />
            </>
        );
    }
};

export default AppLayout;
