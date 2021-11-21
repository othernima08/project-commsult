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
      confirmed: 0,
      unconfirmed: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateGuestName(name) {
    this.setState({
      name: name.target.value,
    });
  }

  updateGuestAge(age){
    this.setState({
      age: age.target.value,
    });
  }

  handleSubmit(event) {
    alert('A new guests was submitted: ' + this.state.name + ' | Age: ' + this.state.age);
    this.setState({unconfirmed: this.state.unconfirmed + 1});
    event.preventDefault();
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
              value={this.state.name}
              onChange={(name) => this.updateGuestName(name)}
            />
            <TextField
              id="standard-basic"
              label="Guest Age"
              variant="standard"
              value={this.state.age}
              onChange={(age) => this.updateGuestAge(age)}
            />
            <Button variant="contained" type="submit">SUBMIT</Button>
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
                <h4>Confirmed:{this.state.confirmed}</h4>
                <h4>Uncomfirmed:{this.state.unconfirmed}</h4>
                <h4>Total:{this.state.confirmed + this.state.unconfirmed}</h4>
              </Grid>
            </Grid>
            <h2>{this.state.name}</h2>
            <h2>{this.state.age}</h2>
            <FormControlLabel control={<Checkbox />}label="Confirmed"/>
          </div>
        </Paper>
      </div>
    );
  }
}

export default App;
