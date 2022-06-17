import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function Auth() {
  return (
    <div>
      <h1>I am Auth</h1>
      <p>pretty much the landing page if you're not signed in, i guess</p>
      <Link to={"/"}>
        <Button>Log In</Button>
      </Link>
    </div>
  );
}

export default Auth;
