import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "./Button";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxHeight: "90vh",
    margin: "5vh",
    "@global": {
      "*::-webkit-scrollbar": {
        width: "0.4em",
      },
      "*::-webkit-scrollbar-track": {
        "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
      },
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(0,0,0,.1)",
        outline: "1px solid slategrey",
      },
    },
  },
  paperContainer: {
    maxHeight: "100%",
    display: "flex",
    alignItems: "flex-start",
    overflow: "auto",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #4A4A49",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3, 3, 3),
    color: "#4A4A49",
  },
}));

export default function TransitionsModal() {
  const styles = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button handleOpen={handleOpen} />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={styles.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={styles.paperContainer}>
            <div className={styles.paper}>
              <h2 id="transition-modal-title">Inventory</h2>
              <p id="transition-modal-description">Item</p>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
