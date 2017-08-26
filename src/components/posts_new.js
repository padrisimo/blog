import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        return (
            <div>
                <label>{field.label}</label>
                <input 
                    type="text"
                    className="form-control"
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
        errors.categories = "Really? a post without content? OMG";
    }
    
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostNewForm'
})(PostsNew);