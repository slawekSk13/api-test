import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const Form = ({ initialValues, handleSubmit, handleCancel }) => {
  return (
    <Formik
      initialValues={
        initialValues
          ? { ...initialValues } // values for post edit
          : {
              title: "", // initial values for new post
              body: "",
              userId: Math.floor(Math.random() * 10) + 1, //fake userId to provide all data for database
            }
      }
      validationSchema={Yup.object({
        // couldn't find any requirments in documentation of json placeholder, but decided both fields shouldn't be empty
        title: Yup.string()
          .min(3, "Title must be longer than 3 letters")
          .required("Please add title"),
        body: Yup.string()
          .min(15, "Post must be longer than 15 letters")
          .required("Please add post"),
      })}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <form className="box" onSubmit={props.handleSubmit}>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input
                className="input"
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.title}
                name="title"
                placeholder="Post title"
              />
              {props.touched.title && props.errors.title ? (
                <div className="notification is-danger">
                  {props.errors.title}
                </div>
              ) : null}
            </div>
          </div>
          <div className="field">
            <label className="label">Post</label>
            <div className="control">
              <textarea
                className="textarea"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.body}
                name="body"
                placeholder="Enter your text"
              />
              {props.touched.body && props.errors.body ? (
                <div className="notification is-danger">
                  {props.errors.body}
                </div>
              ) : null}
            </div>
          </div>
          <div className="buttons">
            <button type="submit" className="button is-success">
              Send
            </button>
            <button onClick={handleCancel} className="button is-warning">
              Cancel
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export { Form };
