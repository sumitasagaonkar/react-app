import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";

import { blue } from "@mui/material/colors";
import Link from "@mui/material/Link";

import Avatar from "@mui/material/Avatar";

const Dashboard = () => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [subjectName, setSubjectName] = useState("");
  const [loading, setLoading] = useState(false);
  const [SubjectList, setSubjectlist] = useState([]);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [open, setOpen] = useState(false);

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleListItemClick = (value) => {
    setOpen(value);
  };

  const [addSudentDialog, setAddStudentDialog] = useState(false);
  const handleStudentDialodClose = () => {
    setAddStudentDialog(false);
  };
  function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
      onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
      onClose(value);
    };

    return (
      <Dialog onClose={handleClose} open={open}>
        <div style={{ padding: "3rem" }}>
          <Typography component="h1" variant="h5">
            Enter Student details
          </Typography>
          <Box noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="First Name"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  label="First Name"
                  name="First Name"
                  autoComplete="First Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Last Name,"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  label="Last Name,"
                  name="Last Name,"
                  autoComplete="Last Name,"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
            </Grid>
            <Button
              onClick={() => {
                //   handleSubmit();
              }}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Student
            </Button>
          </Box>{" "}
        </div>
      </Dialog>
    );
  }

  SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Welcome
            </Typography>
            {auth && (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>

      <div className="navList">
        {/* <Typography component="h1" variant="h5" color="primary" gutterBottom>
            Subject list{" "}
          </Typography> */}
        <Typography gutterBottom variant="h4" component="div">
          Subject list{" "}
        </Typography>

        <div>
          <Button
            variant="contained"
            onClick={() => {
              setOpen(true);
            }}
          >
            ADD Subject
          </Button>
        </div>
      </div>

      <div style={{ marginRight: "10%", marginLeft: "10%", marginTop: "3rem" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          {SubjectList.map((item) => (
            <Box
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
                boxShadow: 1,
              }}
            >
              <Box sx={{ mt: 3, mx: 2 }}>
                <Grid container alignItems="center">
                  <Grid item xs style={{ paddingTop: "10px" }}>
                    <Typography gutterBottom variant="h4" component="div">
                      {item}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button
                      onClick={() => {
                        setAddStudentDialog(true);
                      }}
                    >
                      Add Sudent
                    </Button>
                  </Grid>
                </Grid>
                <Typography color="text.secondary" variant="body2">
                  Upload PDF Documents / Videos for subject
                </Typography>
              </Box>

              <Box sx={{ m: 2 }}>
                <Typography gutterBottom variant="body1">
                  Supported Documents
                </Typography>
                <Stack direction="row" spacing={1}>
                  <Chip label="pdf" />
                  <Chip label="Videos" />
                </Stack>
              </Box>
              <Divider variant="middle" />
              <Box sx={{ mt: 1, ml: 1, mb: 1 }}>
                <Button>Add Documents</Button>
              </Box>
            </Box>
          ))}{" "}
        </div>
      </div>

      <Dialog onClose={handleDialogClose} open={open}>
        {/* <DialogTitle>Add new subject</DialogTitle>
        <div style={{ width: "500px", padding: "15px", paddingBottom: "0px" }}>
          {" "}
          <TextField
            id="outlined-basic"
            label="Enter subject name"
            fullWidth
            variant="outlined"
            value={subjectName}
            onChange={(e) => {
              setSubjectName(e.target.value);
            }}
          />
        </div>
        <div style={{ width: "500px", padding: "20px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div></div>
            <div>
              <LoadingButton
                size="medium"
                onClick={() => {
                  setSubjectlist([...SubjectList, subjectName]);
                  setOpen(false);
                  setSubjectName("");
                }}
                loading={loading}
                loadingIndicator="Loading..."
                variant="contained"
              >
                Add subject
              </LoadingButton>
            </div>
          </div>
        </div> */}
        <div style={{ padding: "2.5rem", width: "500px" }}>
          <Typography component="h1" variant="h5">
            Add new subject
          </Typography>
          <Box noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Enter subject name"
                  value={subjectName}
                  onChange={(e) => {
                    setSubjectName(e.target.value);
                  }}
                  label="Enter subject name"
                  name="Enter subject name"
                  autoComplete="Enter subject name"
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                setSubjectlist([...SubjectList, subjectName]);
                setOpen(false);
                setSubjectName("");
              }}
            >
              Add subject
            </Button>
          </Box>{" "}
        </div>
      </Dialog>
      <SimpleDialog
        selectedValue={""}
        open={addSudentDialog}
        onClose={handleStudentDialodClose}
      />
    </div>
  );
};

export default Dashboard;
