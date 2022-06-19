import { Link } from "react-router-dom";
import { Box, Button, Card } from "@mui/material";

function PageNotFound() {
  return (
    <Box>
      <Card variant="outlined" sx={{ width: 500, margin: "0 auto" }}>
        <h1>404 Page Not Found</h1>
        <p>Whatever you just tried didn't work. How about we head home?</p>
        <Link to={"/"}>
          <Button variant="contained">Home</Button>
        </Link>
      </Card>
    </Box>
  );
}

export default PageNotFound;
