'use client'

import React from 'react';
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
const SignupForm = () => {
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
      <label htmlFor="firstName">First Name</label>
      <Input
      isClearable
      label="firstName"
      variant="bordered"
      onChange={formik.handleChange}
      name="firstName"
      value={formik.values.firstName}
      placeholder="Enter your firstName"
      className="max-w-xs"
    />
        {formik.errors.firstName}
      <label htmlFor="lastName">Last Name</label>
      <Input
      isClearable
      label="lastName"
      variant="bordered"
      onChange={formik.handleChange}
      name="lastName"
      value={formik.values.lastName}
      placeholder="Enter your lastName"
      className="max-w-xs"
    />
      {formik.errors.lastName}
      <label htmlFor="email">Email Address</label>
      <Input
      isClearable
      type="email"
      label="Email"
      variant="bordered"
      onChange={formik.handleChange}
      name="email"
      value={formik.values.email}
      placeholder="Enter your email"
      defaultValue="junior@nextui.org"
      onClear={() => console.log("input cleared")}
      className="max-w-xs"
    />

{formik.errors.email}
    <Input
      isClearable
      type="password"
      label="Password"
      variant="bordered"
      onChange={formik.handleChange}
      name="password"
      value={formik.values.password}
      placeholder="Enter your password"
      onClear={() => console.log("input cleared")}
      className="max-w-xs"
    />
       {formik.errors.password}
      <button type="submit">Submit</button>
    </form>
  );
};


export default SignupForm