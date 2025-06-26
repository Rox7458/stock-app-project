import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const LoginForm = ({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        name="email"
        label="Email"
        onChange={handleChange}
        onBlur={handleBlur}
        variant="outlined"
        type="email"
        value={values.email}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
        margin="normal"
      />

      <TextField
        fullWidth
        name="password"
        label="Password"
        onChange={handleChange}
        onBlur={handleBlur}
        variant="outlined"
        type="password"
        value={values.password}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
        margin="normal"
      />

      <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
