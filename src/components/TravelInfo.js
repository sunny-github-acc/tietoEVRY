import { useContext } from "react";
import Input from "./Input";
import Slider from "./Slider";
import GlobalContext from "../globalState/Context";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  width: {
    width: "25ch",
    fontSize: 20,
    padding: 10,
    paddingTop: 20,
  },
}));

const Info = () => {
  const styles = useStyles();
  const Context = useContext(GlobalContext);

  return (
    <>
      <Input placeholder={"Departure"} setInput={Context.setStart} />
      <Input placeholder={"Arrival"} setInput={Context.setFinish} />

      <Typography
        id="discrete-slider-always"
        gutterBottom
        className={styles.width}
      >
        Length of stay: {Context.distance} days
      </Typography>
      <Slider handleChange={Context.setDistance} />
    </>
  );
};

export default Info;
