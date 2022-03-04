import { React, useState } from "react";
import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import Box from "@mui/material/Box";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

const Route = (props) => {
  const [value, setValue] = useState(0);

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box >
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paperStyle = {
    width: 340,
    margin: "20px auto",
  };

  return (
    <Paper elevation={20} style={paperStyle}>
      <Tabs
        value={value}
        indicatorColor="primary"
        onChange={handleChange}
        variant="fullWidth"
        aria-label="disabled tabs example"
      >
        <Tab label="Sign In" />
        <Tab label="Sign Up" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Login handleChange={handleChange}></Login>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SignUp></SignUp>
      </TabPanel>
    </Paper>
  );
};

export default Route;
