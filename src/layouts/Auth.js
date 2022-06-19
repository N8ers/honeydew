import { Link } from "react-router-dom";
import { Box, Button, Card } from "@mui/material";

function Auth() {
  return (
    <Box>
      <Card variant="outlined" sx={{ width: 500, margin: "0 auto" }}>
        <h1>I'm Auth</h1>
        <p>Pretty much the landing page if you're not signed in, i guess.</p>
        <Link to={"/lists"}>
          <Button variant="contained">Log In</Button>
        </Link>
      </Card>
    </Box>
  );
}

export default Auth;
