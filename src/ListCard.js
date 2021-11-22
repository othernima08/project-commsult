import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function ListCard({ handleEdit, handleDelete, id, name, age, dateRegistered, timeRegistered}) {
  return (
          <Card sx={{ minWidth: 275 }} variant="outlined">
            <CardContent>
              <Typography
                sx={{ fontSize: 20 }}
                color="text.secondary"
                gutterBottom
              >
                Guest {id}
              </Typography>
              <Divider />
              <Typography sx={{ mt: 1.5, fontSize: 12 }} component="div">
                Name
              </Typography>
              <Typography sx={{ fonSize: 20 }} color="text.secondary">
                {name}
              </Typography>
              <Typography sx={{ mt: 1.5, fontSize: 12 }} component="div">
                Age
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {age}
              </Typography>
              <FormControlLabel control={<Checkbox />} label="Confirmed" />
              <Typography>Registered on: {dateRegistered}</Typography>
              <Typography>{timeRegistered}</Typography>
              <Button variant="contained" onClick={() => handleEdit(id, name, age)}>
                EDIT
              </Button>
              <Button
                variant="contained"
                onClick={() => handleDelete(id, name)}
                sx={{ ml: 1.5 }}
                color="error"
              >
                REMOVE
              </Button>
            </CardContent>
          </Card>
  );
}