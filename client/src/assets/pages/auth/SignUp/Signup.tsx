import React, { useState } from 'react';
import '../../../../Styles/base/_auth-layout.scss';
import Pokedex from '../../../images/pokeball.png';
import Button from '../../../../component/Button/Button';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signUpValidation } from './signUpValidation';
import Input from '../../../../component/Input/Input';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IUserValue } from '../../../../type/types';

const initialValue = {
  fullname: '',
  age: Number,
  email: '',
  password: '',
  confrimPassword: '',
};

const Signup = () => {
  const [responseMessage, setResponseMessage] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (values: IUserValue) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/v3/user/register',
        values
      );
      setResponseMessage('User registered successfully!');
      alert('✅ Registered successfully! Please log in.');
      navigate('/');
    } catch (error) {
      setResponseMessage('Error registering user');
      console.error(error);
    }
  };

  return (
    <div className='authContainer'>
      <div className='authHeader'></div>
      <div className='authFormWrapper'>
        <div className='authHeaderIcon'>
          <img
            className='authIcon'
            src={Pokedex}
            alt='pokexIcon'
          />
          <h1 className='authTitle'>Pokédex</h1>
        </div>
        <div className='authFormContainer'>
          <div className='authInnerForm'>
            <h1 className='authHeading'>Signup to Pokedex</h1>
            <Formik
              initialValues={initialValue}
              validationSchema={signUpValidation}
              onSubmit={handleSubmit}
            >
              {({ handleChange, handleBlur, values }) => (
                <Form className='authForm'>
                  <Input
                    type='text'
                    placeholder='Name'
                    name='fullname'
                    value={values.fullname}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                  <ErrorMessage
                    name='name'
                    component='div'
                    className='error-message'
                  />

                  <Input
                    type='number'
                    placeholder='Age'
                    name='age'
                    value={values.age}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                  <ErrorMessage
                    name='age'
                    component='div'
                    className='error-message'
                  />

                  <Input
                    type='email'
                    placeholder='Email Address'
                    name='email'
                    value={values.email}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                  <ErrorMessage
                    name='email'
                    component='div'
                    className='error-message'
                  />

                  <Input
                    type='password'
                    placeholder='New Password'
                    name='password'
                    value={values.password}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                  <ErrorMessage
                    name='password'
                    component='div'
                    className='error-message'
                  />

                  <Input
                    type='password'
                    placeholder='Confirm Password'
                    name='confrimPassword'
                    value={values.confrimPassword}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                  <ErrorMessage
                    name='confrimPassword'
                    component='div'
                    className='error-message'
                  />

                  <Button
                    type='submit'
                    buttonName='SignUp'
                  />
                </Form>
              )}
            </Formik>
            <h2 className='authHeading'>
              Already have an account?{' '}
              <NavLink
                style={{ color: 'red' }}
                to='/'
              >
                Login
              </NavLink>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
