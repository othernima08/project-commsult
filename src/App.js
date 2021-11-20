import "./App.css";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

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
          <TextField id="standard-basic" label="Guest Name" variant="standard" />
          <TextField id="standard-basic" label="Guest Age" variant="standard" />
        </Box>
      </Paper>
    </div>
  );
}

export default App;
