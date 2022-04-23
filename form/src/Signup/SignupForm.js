import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function SignupForm() {
  return (
    <div className="ui form error">
      <Formik
        initialValues={{ email: "", firstName: "", lastName: "" }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(15, "Must be 15 characters of less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      >
        <Form className="ui form">
          <div className="field">
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage
              component="div"
              className="ui pointing red basic label"
              name="email"
            />
          </div>

          <div className="field">
            <label htmlFor="lastName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage
              component="div"
              className="ui pointing red basic label"
              name="firstName"
            />
          </div>

          <div className="field">
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage
              component="div"
              className="ui pointing red basic label"
              name="lastName"
            />
          </div>

          <button className="ui submit button" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default SignupForm;
