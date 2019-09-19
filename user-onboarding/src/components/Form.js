import React, { useState } from "react";
import { withFormik, Form, Field, validateYupSchema } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const NewForm = ({values}) => {
    const [employee, setEmployee] = useState ([])

    return (
        <div>
            <Form>
                <Field type='text' name='name' placeholder='nom de guerre' />
                <Field type='text' name='email' placeholder='electronic mail' />
                <Field type='text' name='password' placeholder='password' />
                <label>
                    terms
                    <Field type='checkbox' name='terms of service' checked={values.terms} />
                </label>
                <button>DOOM!</button>
            </Form>
        </div>
    )
}

const FormikNewForm = withFormik ({
    mapPropsToValues({ name, email, password, terms }) {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            terms: terms || false
        };
    },

    validateYupSchema: Yup.object().shape({
        name: Yup.string().required("nom de guerre required"),
        email: Yup.string().required(),
        password: Yup.string().required("1-2-3-4-5....")
    }),

})(NewForm);

console.log("THIS IS THE hoc", FormikNewForm);
export default FormikNewForm;