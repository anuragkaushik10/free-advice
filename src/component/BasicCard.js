import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function BasicCard({ advice, image }) {
  //   console.log(advice);
  //   console.log(image);
  return (
    <div className="card">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="500"
          image={image}
          alt="Some random dude"
        />
        <CardContent>
          <Typography variant="body2" color="text.primary">
            {advice}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
