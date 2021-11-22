import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

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
              <Typography sx={{ mt: 1.5, fontSize: 12 }} component="div">
                Name
              </Typography>
              <Typography sx={{ fonSize: 20 }} color="text.secondary">
                {guest.nama}
              </Typography>
              <Typography sx={{ mt: 1.5, fontSize: 12 }} component="div">
                Age
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {guest.umur}
              </Typography>
              <FormControlLabel control={<Checkbox />} label="Confirmed" />
              <p>{guest.dateRegistered}</p>
              <p>{guest.timeRegistered}</p>
              <Button variant="contained" onClick={() => handleEdit(guest.id, guest.nama, guest.umur)}>
                EDIT
              </Button>
              <Button
                variant="contained"
                onClick={() => handleDelete(guest.id, guest.nama)}
                sx={{ ml: 1.5 }}
                color="error"
              >
                REMOVE
              </Button>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}