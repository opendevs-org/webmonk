import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid
} from "@material-ui/core";

import WeatherCard from './WeatherCard'

const useStyles = makeStyles(theme => ({
  layout: {
    marginTop: "20px"
  }
}));

const AppLayout = (props) => {
  const classes = useStyles();
  const { currentWeather, icon, recommendation } = props;

  return (
    <div className={classes.layout}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <WeatherCard
            currentWeather={currentWeather}
            // forecast={forecast}
            icon={icon}
            recommendation={recommendation}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default AppLayout;
