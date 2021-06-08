import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import React, { useContext } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  width: {
    width: "25ch",
    fontSize: 20,
  },
}));

export default function DiscreteSlider({ handleChange }) {
  const styles = useStyles();

  const AmountSlider = createMuiTheme({
    overrides: {
      MuiSlider: {
        root: {
          color: "#e4ebf8",
        },
        thumb: {
          backgroundColor: "#4A4A49",
        },
        track: { backgroundColor: "#565656" },
        rail: { backgroundColor: "#BABABA" },
      },
    },
  });

  return (
    <div className={styles.root}>
      <ThemeProvider theme={AmountSlider}>
        <Slider
          defaultValue={20}
          onChange={(e, value) => handleChange(value)}
          aria-labelledby="discrete-slider-custom"
          step={10}
          valueLabelDisplay="auto"
          className={styles.width}
        />
      </ThemeProvider>
    </div>
  );
}
