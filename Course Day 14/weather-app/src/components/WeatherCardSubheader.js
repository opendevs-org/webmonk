import React from "react";
import dayjs from "dayjs";

const WeatherCardSubHeader = props => {
    const { currentWeather } = props;
    //NOTE: checking if data is valid or not
    const date = dayjs().isValid(currentWeather.date) ? currentWeather.date : "";
    const description = currentWeather.description
        ? currentWeather.description
        : "";

    //NOTE: formatting date using dayjs, ("dddd") means name of day like Sunday, ("h:mm") means time in format like 1:27, ("A") means AM/PM
    return (
        <>
            <span>
                {dayjs(date).format("dddd")}, {dayjs(date).format("h:mm")}{" "}
                {dayjs(date).format("A")},{" "}
                {description.replace(/\w\S*/g, txt => { // Regex /\w\S*/g verifies if the string has word characters only & not some objects or anything
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); // Make the first letter of each word uppercase
                })}
            </span>
        </>
    );
}

export default WeatherCardSubHeader;
