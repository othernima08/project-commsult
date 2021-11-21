import "./App.css";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from '@mui/material/Typography';

function App() {
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
        >
          <TextField
            id="standard-basic"
            label="Guest Name"
            variant="standard"
          />
          <TextField id="standard-basic" label="Guest Age" variant="standard" />
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
          <Grid item xs={6} sx={{textAlign: 'right'}}>
            <h4>Attending:</h4>
            <h4>Uncomfirmed:</h4>
            <h4>Total:</h4>
          </Grid>
          </Grid>
        </div>
      </Paper>
    </div>
  );
}

export default App;
