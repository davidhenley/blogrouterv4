import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class PostNew extends Component {
  onSubmit = (values) => {
    console.log(values);
  }

  renderField(field) {
    const { meta: { touched, error } } = field;

    return (
      <div className="form-group">
        <label className="form-control-label">{field.label}</label>
        <input className="form-control form-control-danger" type="text" { ...field.input } />
        <div className="text-danger">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="PostNew container">
        <h3>Add a Post</h3>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field name="title" label="Title" component={this.renderField} />
          <Field name="categories" label="Categories" component={this.renderField} />
          <Field name="content" label="Post Content" component={this.renderField} />
          <button type="submit" className="btn btn-primary"> Submit </button>
          <Link className="btn btn-danger" to="/">Cancel</Link>
        </form>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};

  if (!values.title) errors.title = 'Enter a title';
  if (!values.categories) errors.categories = 'Enter at least one category';
  if (!values.content) errors.content = 'Enter some post content';

  return errors;
};

export default reduxForm({
  form: 'newpost',
  validate
})(PostNew);
