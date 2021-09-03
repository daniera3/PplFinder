import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {Link} from "react-router-dom";

const NavBar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_e, newValue) => {
    setValue(newValue);
  };

  const LinkStyle={
    color:"#84ffff",
    borderBottom: "none",
    textDecoration: 'none'
  }

  return (
    <AppBar position="static" color="transparent" style={{ position: "fixed", top: 0 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Navigation"
        indicatorColor="primary"
        textColor="primary"
      >
        <Link to="/" style={LinkStyle}   variant="body2" onClick={()=>{handleChange(null,0)}} >
          <Tab label="Home" index={0} /> 
        </Link>
          <Link to="/favorites" style={LinkStyle}  variant="body2" onClick={()=>{handleChange(null,1)}} >
            <Tab label="Favorites" index={1} />
          </Link>
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
