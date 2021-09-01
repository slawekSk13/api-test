import React from 'react';
import {Formik} from 'formik';

const Form = ({initialValues, handleSubmit}) => {
    return (
        <Formik initialValues={initialValues ? {...initialValues} : {
            title: '',
            body: '',
            userId: Math.floor(Math.random()*10) + 1
        }} onSubmit={handleSubmit}>
            {props => (
                <form className='box' onSubmit={props.handleSubmit}>
                    <div className='field'>
                        <label className="label">Name</label>
                        <div className="control">
                        <input
                            className='input'
                        type='text'
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.title}
                        name='title'
                            placeholder='Post title'
                    /></div></div>
                    <div className='field'>
                        <label className="label">Post</label>
                        <div className="control">
                    <textarea
                        className='textarea'
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.body}
                        name='body'
                        placeholder='Enter your text'
                    /></div></div>
                    <div className='buttons'>
                    <button type='submit' className='button is-success'>Send</button>
                    <button className='button is-danger'>Cancel</button>
                    </div>
                </form>
            )}
        </Formik>
    )
}

export {Form}