import React from "react";
import { Button, TextField } from "@mui/material";

const RegisterForm = ({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        name="username"
        label="User name"
        onChange={handleChange}
        onBlur={handleBlur}
        variant="outlined"
        type="text"
        value={values.username}
        error={touched.username && Boolean(errors.username)}
        helperText={touched.username && errors.username}
        margin="normal"
      />

      <TextField
        fullWidth
        name="firstname"
        label="First name"
        onChange={handleChange}
        onBlur={handleBlur}
        variant="outlined"
        type="text"
        value={values.firstname}
        error={touched.firstname && Boolean(errors.firstname)}
        helperText={touched.firstname && errors.firstname}
        margin="normal"
      />

      <TextField
        fullWidth
        name="lastname"
        label="Last name"
        onChange={handleChange}
        onBlur={handleBlur}
        variant="outlined"
        type="text"
        value={values.lastname}
        error={touched.lastname && Boolean(errors.lastname)}
        helperText={touched.lastname && errors.lastname}
        margin="normal"
      />

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
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
