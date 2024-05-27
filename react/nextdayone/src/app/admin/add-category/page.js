'use client'

import React,{useRef, useEffect} from 'react';
import { useFormik } from 'formik';
import {Input} from "@nextui-org/react";
import * as Yup from 'yup';
 
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'), 
  email: Yup.string().email('Invalid email').required('Required'),
});
const AddCategoryForm = () => {
  const inputRef= useRef(null)
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
    validationSchema:SignupSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">Product Name</label>
      <Input
      isClearable
      label="firstName"
      variant="bordered"
      onChange={formik.handleChange}
      name="firstName"
      value={formik.values.firstName}
      placeholder="Enter your firstName"
      className="max-w-xs"
      onClear={()=>{
        formik.setFieldValue("firstName", '')
      }}
    />
        {formik.errors.firstName}
    

      <button type="submit">Submit</button>
    </form>
  );
};


export default AddCategoryForm