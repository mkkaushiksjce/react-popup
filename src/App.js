import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

import Dropdown from "./Components/Dropdown/Dropdown.js";
import FileDownload from "./Components/FileDownload/FileDownload.js";

import "./style.css";

function App() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="modal-popup">
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <FileDownload />
      <Dialog open={open} onClose={handleClose}>
        <IconButton id="closeIcon" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        <DialogTitle id="alertDialogTitle">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alertDialogDescription">
            Let Google help apps determine location. This means sending
            anonymous location data to Google
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            className="modal-buttons"
            onClick={handleClose}
            color="primary"
          >
            Download
          </Button>
          <Button
            className="modal-buttons"
            onClick={handleClose}
            color="primary"
            autoFocus
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default App;
