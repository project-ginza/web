import React from "react";
import * as yup from "yup";
import {Formik, ErrorMessage} from "formik";

const LoginPage = () => {
  const validationSchema = yup.object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .min(6, "password must be at least 6 characters")
      .required(),
  });

  return (
    <Formik
      initialValues={{email: "", password: ""}}
      validationSchema={validationSchema}
      onSubmit={(values, {setSubmitting}) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <ErrorMessage name="email" component="div" />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};

export default LoginPage;
