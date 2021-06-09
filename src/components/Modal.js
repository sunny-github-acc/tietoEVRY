import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "./Button";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import { InputAdornment, TextField } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxHeight: "90vh",
    margin: "5vh",
    "& h2": { marginBottom: 5 },
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
    color: "#4A4A49",
  },
  header: {
    background: "#e4ebf8",
    marginTop: 10,
    marginBottom: 10,
    padding: "10px 20px 10px 20px",
    minWidth: "50vw",
  },
  item: {
    margin: " 5px 20px 5px 20px",
    borderBottom: ".5px solid #4a4a497e",
    display: "flex",
    justifyContent: "space-between",
  },
  form: {
    margin: " 0px 20px 5px 20px",
    color: "#4A4A49",
  },
}));

export default function TransitionsModal({ defaultItems }) {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(defaultItems);
  const [input, setInput] = useState("");
  const customStyles = {
    margin: 0,
    padding: 0,
    border: 0,
    minWidth: 0,
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleItem = (itemProps) => {
    let thisItems = items.map((item) => {
      return {
        ...item,
        items: item.items.filter((itemFilter) => itemFilter.id !== itemProps),
      };
    });

    setItems(thisItems);
  };

  const handleSubmit = (e, itemProps) => {
    e.preventDefault();

    let thisItems = items.map((item) => {
      if (itemProps !== item.name) return { ...item };

      return {
        ...item,
        items: [
          ...item.items,
          {
            name: input,
            id: uuidv4(),
            distance: 1,
            quantity: 1,
          },
        ],
      };
    });

    setItems(thisItems);
    setInput("");
  };

  return (
    <div>
      <Button onClick={handleOpen} text={"Let's pack"} />
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
              <h2 id="transition-modal-title" className={styles.header}>
                Inventory
              </h2>
              {items &&
                items.map((item) => {
                  return (
                    <span key={item.id}>
                      <h3
                        id="transition-modal-title"
                        className={styles.header}
                        key={item.id}
                      >
                        {item.name}
                      </h3>
                      {item.items.map((i) => {
                        return (
                          <span key={i.id}>
                            <div
                              id="transition-modal-description"
                              className={styles.item}
                              key={i.id}
                            >
                              {i.name}
                              <Button
                                text={<CloseIcon style={{ width: 20 }} />}
                                onClick={() => handleItem(i.id)}
                                customStyles={customStyles}
                              />
                            </div>
                          </span>
                        );
                      })}
                      <form
                        className={styles.form}
                        noValidate
                        autoComplete="off"
                        onSubmit={(e) => handleSubmit(e, item.name)}
                      >
                        <TextField
                          id="standard-basic"
                          onChange={(e) => setInput(e.target.value)}
                          label={"Add " + item.name + " Item"}
                          fullWidth={true}
                          InputLabelProps={{
                            style: {
                              color: "#4A4A49",
                            },
                          }}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment
                                position="end"
                                style={{ color: "#4A4A49" }}
                              >
                                <Button
                                  text={
                                    <AddIcon
                                      style={{
                                        color: "#4A4A49",
                                      }}
                                    />
                                  }
                                  customStyles={customStyles}
                                  onClick={(e) => handleSubmit(e, item.name)}
                                />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </form>
                    </span>
                  );
                })}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
