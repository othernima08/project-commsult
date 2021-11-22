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
import moment from "moment";
import ListCard from "./ListCard";

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
      guestArr: [
        // {
        //   id: null,
        //   nama: "",
        //   umur: "",
        //   dateRegistered: null,
        //   timeRegistered: null,
        // },
      ],
      guest: {},
      confirmed: 0,
      unconfirmed: 0,
      count: 1,
      isSubmitted: false,
      // isUpdate: [
      //   {
      //     id: null,
      //     status: false,
      //   },
      // ],
      isUpdateId: null,
      isUpdateStatus: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
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

  handleSubmit = (event) => {
    // alert('A new guests was submitted: ' + this.state.name + ' | Age: ' + this.state.age);
    
    if (this.state.isUpdateStatus === true) {
      let id = this.state.isUpdateId;
      var guestArr = [...this.state.guestArr];
      var index = guestArr.findIndex((obj) => obj.id === id);
      guestArr[index].nama = this.state.name;
      guestArr[index].umur = this.state.age;
      this.setState({ guestArr });
      alert('Guest ' + this.state.isUpdateId + ' updated');
    }
    else{
      event.preventDefault();
      this.setState({ unconfirmed: this.state.unconfirmed + 1 });
      this.setState({ count: this.state.count + 1 });
  
      const newGuest = [...this.state.guestArr];
      newGuest.push({
        id: this.state.count,
        nama: this.state.name,
        umur: this.state.age,
        dateRegistered: moment().format("DD-MM-YYYY"),
        timeRegistered: moment().format("hh:mm:ss"),
      });
  
      this.setState({ guestArr: newGuest });
  
      // this.setState((prevState) => {
      //   const guestArr = prevState.guestArr.concat({
      //     ...prevState.guest,
      //     id: lastGuest.id + 1,
      //     dateRegistered: moment().format("DD-MM-YYYY"),
      //     timeRegistered: moment().format("hh:mm:ss"),
      //   });
  
      //   return {
      //     guestArr,
      //     guest: {},
      //   };
      // });
    }
    this.setState({
      name: "",
      age: "",
    });
    this.setState({isUpdateStatus: false});
  };

  handleDelete(id, name) {
    alert("Remove guest " + name + "?");
    this.setState((prevState) => {
      const guestArr = prevState.guestArr.filter((guest) => guest.id !== id);
      return { guestArr };
    });
  }

  handleEdit = (id, name, age) => {
    this.setState({ name: name });
    this.setState({ age: age });
    this.setState({ isUpdateStatus: true});
    this.setState({ isUpdateId: id});
  };

  editSubmitted = (id) => {
    var guestArr = [...this.state.guestArr];
    var index = guestArr.findIndex((obj) => obj.id === id);
    guestArr[index].nama = this.state.name;
    guestArr[index].umur = this.state.age;
    this.setState({ guestArr });
  };

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
              value={this.state.name}
              onChange={(name) => this.updateGuestName(name)}
              //onChange={this.handleChange}
            />
            <TextField
              id="standard-basic"
              label="Guest Age"
              variant="standard"
              name="umur"
              value={this.state.age}
              onChange={(age) => this.updateGuestAge(age)}
              //onChange={this.handleChange}
            />
            <Button
              variant="contained"
              type="submit"
              disabled={!this.state.name || !this.state.age || this.state.isUpdateStatus}
            >
              SUBMIT
            </Button>
            <Button
            variant="contained"
            onClick={this.handleSubmit}
            disabled={!this.state.name || !this.state.age || this.state.isUpdateStatus === false}
            >  
              EDIT
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
                <h4>Confirmed: {this.state.confirmed}</h4>
                <h4>Uncomfirmed: {this.state.unconfirmed}</h4>
                <h4>Total: {this.state.confirmed + this.state.unconfirmed}</h4>
              </Grid>
            </Grid>
            {/* <h2>{this.state.name}</h2>
            <h2>{this.state.age}</h2>
            <p>{this.state.isUpdateStatus.toString()}</p> */}
            <FormControlLabel control={<Checkbox />} label="Confirmed" />

          </div>
          {/* Guest Card */}
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <ListCard
                value={this.state.guestArr}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            </Grid>
          </Grid>

          {/* {this.state.guestArr.map((guest) => (
            <div key={guest.id}>
              <Grid container spacing={2}>
              <Grid item xs={4}>
                <ListCard value={this.state.guestArr} handleDelete={this.handleDelete} />
              </Grid>
          </Grid>
            </div>
          ))} */}
        </Paper>
      </div>
    );
  }
}

export default App;
