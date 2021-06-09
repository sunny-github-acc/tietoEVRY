import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const ColorButton = withStyles(() => ({
  root: {
    color: "#4A4A49",
    margin: 10,
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
  },
  passive: { color: "#c4d4f3", borderColor: "#c4d4f3" },
}));

export default function CustomizedButtons({
  text,
  description,
  onClick,
  isPassive = false,
  customStyles,
}) {
  const styles = useStyles();

  return (
    <div>
      <ColorButton
        variant="outlined"
        className={(styles.margin, isPassive ? styles.passive : "")}
        onClick={onClick}
        style={customStyles}
      >
        {text}
        {description}
      </ColorButton>
    </div>
  );
}
