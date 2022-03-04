import {
  Avatar,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { pink } from "@mui/material/colors";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormHelperText } from "@mui/material";
import * as Yup from "yup";

const SignUp = () => {
  const paperStyle = {
    padding: 20,
    width: 300,
    margin: "0 auto",
  };

  const btnStyle = {
    margin: "10px auto",
  };

  const initialValues = {
    name: "",
    email: "",
    gender: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    termAndConditions: false,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "too short").required("Required"),
    email: Yup.string().email("Enter valid email").required("Required"),
    gender: Yup.string().oneOf(["male", "female"]).required("Required"),
    phoneNumber: Yup.number()
      .typeError("Enter Valid Phone Number")
      .required("Required"),
    password: Yup.string()
      .min(8, "Password minimum length should be 8")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password should match")
      .required("Required"),
    termAndConditions: Yup.string().oneOf(
      ["true"],
      "Accept terms & conditions"
    ),
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
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar sx={{ bgcolor: pink[500] }}>
              <AssignmentIcon />
            </Avatar>
            <h2>Sign Up</h2>
          </Grid>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(props) => (
              <Form initialValues={initialValues}>
                <Field
                  as={TextField}
                  fullWidth
                  name="name"
                  label="Name"
                  variant="standard"
                  placeholder="Enter your name"
                  required
                  helperText={<ErrorMessage name="name" />}
                />

                <Field
                  as={TextField}
                  fullWidth
                  name="email"
                  label="Email"
                  variant="standard"
                  placeholder="Enter your email"
                  required
                  helperText={<ErrorMessage name="email" />}
                />

                <FormControl component="fieldset">
                  <FormLabel component="legend">Gender</FormLabel>

                  <Field
                    as={RadioGroup}
                    aria-label="gender"
                    name="gender"
                    style={{ display: "initial" }}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                  </Field>
                </FormControl>
                <FormHelperText>
                  {<ErrorMessage name="gender" />}
                </FormHelperText>

                <Field
                  as={TextField}
                  fullWidth
                  name="phoneNumber"
                  label="Phone Number"
                  variant="standard"
                  placeholder="Enter your phone number"
                  required
                  helperText={<ErrorMessage name="phoneNumber" />}
                />
                <Field
                  as={TextField}
                  fullWidth
                  name="password"
                  label="Password"
                  variant="standard"
                  placeholder="Enter your password"
                  required
                  type="password"
                  helperText={<ErrorMessage name="password" />}
                />
                <Field
                  as={TextField}
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  variant="standard"
                  placeholder="Confirm your password"
                  required
                  type="password"
                  helperText={<ErrorMessage name="confirmPassword" />}
                />
                <FormControlLabel
                  style={btnStyle}
                  control={<Field as={Checkbox} name="termAndConditions" />}
                  label="I accept the terms and conditions."
                />
                <FormHelperText>
                  {<ErrorMessage name="termAndConditions" />}
                </FormHelperText>
                <Button
                  type="submit"
                  style={btnStyle}
                  variant="contained"
                  color="primary"
                  disable={props.isSubmitting}
                  fullWidth
                >
                  {props.isSubmitting ? "Loading" : "Sign Up"}
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </div>
  );
};

export default SignUp;
