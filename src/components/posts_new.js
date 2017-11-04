import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) { //contains event handler wireup jsx
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
          />
      </div>
    );
  }


  render() {
    return (
      <form>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  // validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Enter a title!";
  }

  if (!values.categories) {
    errors.categories = "Enter some categories!";
  }

  if (!values.content) {
    errors.content = "Enter some content plase!";
  }



  // if errors is empty, the form is fine to submit
  // if errors has any properties, redux form assumes fod is invalid;
  return errors;
}

export default reduxForm({
  validate,  // same as validate : validate
  form: 'PostsNewForm' // you can name multiple form names (ex. signup and signin form)
})(PostsNew);
