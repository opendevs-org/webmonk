import React from "react";
import dayjs from "dayjs";

const WeatherCardSubHeader = props => {
  const { currentWeather } = props;
  const date = dayjs().isValid(currentWeather.date) ? currentWeather.date : "";
  const description = currentWeather.description
    ? currentWeather.description
    : "";

    // "haze soft vnsvslivdjvsl"
    // Output: Haze
  return (
    <>
      <span>
        {dayjs(date).format("dddd")}, {dayjs(date).format("h:mm")}{" "}
        {dayjs(date).format("A")},{" "}
        {description.replace(/\w\S*/g, txt => {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        })}
        {
            /*
                // "haze soft vnsvslivdjvsl"
                // Output: Haze
            */
        }
      </span>
    </>
  );
}

export default WeatherCardSubHeader;
