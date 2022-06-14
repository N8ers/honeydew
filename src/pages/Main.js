import { Link, Outlet } from "react-router-dom";
import { Button } from "@mui/material";

import NavigationDrawer from "../components/NavigationDrawer";

function Main() {
  return (
    <div>
      <h1>I Am Page/Main</h1>

      <NavigationDrawer />

      <Link to={"/lists"}>
        <Button variant="contained">lists</Button>
      </Link>

      <Link to={"/lists/2"}>
        <Button variant="contained">lists/2</Button>
      </Link>

      <Outlet />
    </div>
  );
}

export default Main;
