import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { green } from "@mui/material/colors";
import AssignmentIcon from "@mui/icons-material/Assignment";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = ({ handleChange }) => {
  const formStyle = {
    padding: 20,
    height: "73vh",
    width: 300,
    margin: "0 auto",
  };

  const btnstyle = {
    margin: "20px auto",
  };

  const checkboxstyle = { margin: "10px auto" };

  const initialValues = {
    username: "",
    password: "",
    remember: false,
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email("please enter valid email")
      .required("Required"),
    password: Yup.string().required("Required"),
  });
  const onSubmit = (values, props) => {
    console.log(values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };

  return (
    <div>
      <Grid>
        <Paper
          elevation={10}
          style={formStyle}
          sx={{ bgcolor: "background.default" }}
        >
          <Grid align="center">
            <Avatar sx={{ bgcolor: green[500] }}>
              <AssignmentIcon />
            </Avatar>
            <h2>Sign-in</h2>
          </Grid>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  label="Username"
                  name="username"
                  placeholder="Enter username"
                  variant="standard"
                  fullWidth
                  required
                  helperText={<ErrorMessage name="username" />}
                />
                <Field
                  as={TextField}
                  label="Password"
                  name="password"
                  placeholder="Enter password"
                  type="password"
                  variant="standard"
                  fullWidth
                  required
                  helperText={<ErrorMessage name="password" />}
                />
                <Field
                  as={FormControlLabel}
                  name="remember"
                  control={<Checkbox color="primary" />}
                  label="Remember me"
                />

                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  disabled={props.isSubmitting}
                  style={btnstyle}
                  fullWidth
                >
                  {props.isSubmitting ? "Loading" : "Sign in"}
                </Button>
              </Form>
            )}
          </Formik>
          <Grid align="center">
            <Typography>
              <Link href="#">Forgot password ?</Link>
            </Typography>
            <Typography>
              {" "}
              Do you have an account ?
              <Link href="#" onClick={() => handleChange("event", 1)}>
                Sign Up
              </Link>
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};

export default Login;
