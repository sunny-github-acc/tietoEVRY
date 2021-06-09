import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const ColorButton = withStyles(() => ({
  root: {
    color: "#4A4A49",
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
  },
}));

export default function CustomizedButtons() {
  const classes = useStyles();

  return (
    <div>
      <ColorButton variant="outlined" className={classes.margin}>
        Let's pack
      </ColorButton>
      {/* <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" className={classes.margin}>
          Theme Provider
        </Button>
      </ThemeProvider>  */}
    </div>
  );
}
