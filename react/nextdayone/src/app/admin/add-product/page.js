'use client'

import React,{useRef, useEffect} from 'react';
import { useFormik } from 'formik';
import {Input,Select, SelectItem, Checkbox} from "@nextui-org/react";
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
  const categoryList = [{id:1,value:'kids'},{id:1,value:'women'}]

  return (
    <form onSubmit={formik.handleSubmit}>
      <input placeholder='product Name'/>
  <br/> 

      <label htmlFor="firstName">Category Name</label>
  <br/> 

      <Select 
  label="Select  category" 
  className="max-w-xs" 
>
  {categoryList.map((item) => (
    <SelectItem key={item.value} value={item.value}>
      {item.value}
    </SelectItem>
  ))}
</Select>
<br/>
        {formik.errors.firstName}
      <label htmlFor="lastName">Category Image</label>
      <Input
      isClearable
      type="file"
      label="lastName"
      variant="bordered"
      onChange={formik.handleChange}
      name="lastName"
      value={formik.values.lastName}
      placeholder="Enter your lastName"
      className="max-w-xs"
    />
  <br/> 
      {formik.errors.lastName}
      <Checkbox defaultSelected>Is Featured</Checkbox>
  <br/> 

      <button type="submit">Submit</button>
    </form>
  );
};


export default AddCategoryForm