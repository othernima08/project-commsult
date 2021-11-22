import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function ListCard({ value, handleEdit, handleDelete }) {
  return (
    <div className="list-card">
      {value.map((guest) => (
        <div key={guest.id}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 20 }}
                color="text.secondary"
                gutterBottom
              >
                Guest {guest.id}
              </Typography>
              <Divider />
              <Typography sx={{ fontSize: 12 }} component="div">
                Name
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {guest.nama}
              </Typography>
              <Typography sx={{ fontSize: 12 }} component="div">
                Age
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {guest.umur}
              </Typography>
              <p>{guest.dateRegistered}</p>
              <p>{guest.timeRegistered}</p>
              <Button variant="contained" onClick={() => handleEdit(guest.id)}>
                EDIT
              </Button>
              <Button
                variant="contained"
                onCLick={() => handleDelete(guest.id)}
                sx={{ ml: 1.5 }}
                color="error"
              >
                REMOVE
              </Button>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
}