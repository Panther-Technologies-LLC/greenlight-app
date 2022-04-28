import React, { Component } from "react";
import { Formik, Field, Form } from "formik";

// function Contact()
class ContactForm extends Component {
  render() {
    return (
      <div className="ContactForm">
        <h1>Contact Company</h1>
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
            <Field name="name" type="text" />
            <br />
            <br />
            <Field name="email" type="email" />
            <br />
            <br />
            <Field name="number" type="text" />
            <br />
            <br />
            <Field name="message" type="text" />
            <br />
            <br />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    );
  }
}

// ReactDOM.render(<Contact />, document.getElementById("root"));

export default ContactForm;
