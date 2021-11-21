import React from "react";
import "./App.css";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      attending: {},
      // guestList: [
      //   { id: 1, nama: "Pijar", age: "21" },
      //   { id: 2, nama: "Desi", age: "22" },
      // ],
      guestArr: [{ "id": null, "nama": "", "umur": "", "timestamp": "" }],
      guest: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  updateGuestName(name) {
    this.setState({
      name: name.target.value,
    });
  }

  updateGuestAge(age) {
    this.setState({
      age: age.target.value,
    });
  }

  handleChange = (e) => {
    this.name = e.target.name;
    this.value = e.target.value;
    this.setState((prevState) => {
      return {
        guest: {
          ...prevState.guest,
          [this.name]: this.value,
        },
      };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let lastGuest = this.state.guestArr[this.state.guestArr.length - 1];

    this.setState((prevState) => {
      const guestArr = prevState.guestArr.concat({
        ...prevState.guest,
        id: lastGuest.id + 1,
      });
      return {
        guestArr,
        guest: {},
      };
    });

    // alert(
    //   "A new guest was submitted: Name: " +
    //     this.state.name +
    //     " | Age: " +
    //     this.state.age
    // );
   
  }

  render() {
    return (
      <div className="App">
        <Paper
          className="Main-paper"
          elevation={4}
          style={{ backgroundColor: "#3f51b5" }}
        >
          <div className="App-title">Guest List</div>
          <div className="App-subtitle">Track your guest</div>
        </Paper>
        <Paper className="Input-paper" elevation={4}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            onSubmit={this.handleSubmit}
          >
            <TextField
              id="standard-basic"
              label="Guest Name"
              variant="standard"
              name="nama"
              value={this.state.guest.nama}
              // onChange={(name) => this.updateGuestName(name)}
              onChange={this.handleChange}
            />
            <TextField
              id="standard-basic"
              label="Guest Age"
              variant="standard"
              name="umur"
              value={this.state.guest.umur}
              // onChange={(age) => this.updateGuestAge(age)}
              onChange={this.handleChange}
            />
            <Button variant="contained" type="submit">
              SUBMIT
            </Button>
          </Box>
        </Paper>

        <Paper className="Content-paper" elevation={4}>
          <div className="content">
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <h1 id="guests-text">Guests</h1>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Hide uncomfirmed guest"
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: "right" }}>
                <h4>Attending:</h4>
                <h4>Uncomfirmed:</h4>
                <h4>Total:</h4>
              </Grid>
            </Grid>
            <h2>{this.state.name}</h2>
            <h2>{this.state.age}</h2>
            <div>
              {this.state.guestArr.map((guest) => (
                <div key={guest.id}>
                  <h3>{guest.id}</h3>
                  <p>{guest.nama}</p>
                  <p>{guest.umur}</p>
                </div>
              ))}
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default App;
