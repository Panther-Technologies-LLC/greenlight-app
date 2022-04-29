import React, { Component } from "react";
import { Formik, Field, Form } from "formik";

// function Contact()
class ContactForm extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="ContactForm">
          <h1>Contact Company</h1>
          <div className="form">
            <Formik
              initialValues={{
                name: "Full Name",
                email: "Email Address",
                number: "Phone Number",
                message: "Message",
              }}
              onSubmit={async (values) => {
                await new Promise((resolve) => setTimeout(resolve, 500));
                alert(JSON.stringify(values, null, 2));
              }}
            >
              <Form>
                <Field name="name" className="input" type="text" />
                <br />
                <br />
                <Field name="email" className="input" type="email" />
                <br />
                <br />
                <Field name="number" className="input" type="text" />
                <br />
                <br />
                <Field name="message" className="input" type="text" />
                <br />
                <br />
                <button type="submit" className="button">Submit</button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
