import React from 'react';

import Weather from './Weather';
import WeatherSearch from './WeatherSearch';

import * as weatherIcons from "../icons";
import * as recommendations from "../recommendations";

const AppLayout = (props) => {
    const { city, currentWeather, onCityChange, error } = props;

    if (currentWeather) {
        const prefix = "wi wi-";

        const icon = prefix + weatherIcons.default[currentWeather.icon_id].icon;
        const recommendation =
          recommendations.default[currentWeather.icon_id].recommendation;

        return (
            <>
                <WeatherSearch city={city} onCityChange={onCityChange} error={error} />
                <Weather currentWeather={currentWeather} icon={icon} recommendation={recommendation} error={error}/>
            </>
        )
    }
};

export default AppLayout;
