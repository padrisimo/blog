import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `m-t-1 form-group ${ touched && error ? 'has-danger' : ''}`
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input 
                    type="text"
                    className="form-control"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values){
        this.props.createPost(values);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={ handleSubmit(this.onSubmit.bind(this))}>
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
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger m-l-1">Cancel</Link>
            </form>
        );
    }
}

const validate = (values) =>{
    const errors = {};
    
    // validation
    if(!values.title || values.title.length < 3){
        errors.title = "Please enter a title that is at least 3 characters!";
    }
    if(!values.categories) {
        errors.categories = "Enter some Categories, si us plau!";
    }
    if(!values.content) {
        errors.content = "Really? a post without content? OMG";
    }
    
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostNewForm'
})(
    connect(null, { createPost } )(PostsNew)
);