import React, { useEffect, useState } from 'react';
import Input from '../../../../component/Input/Input';
import Button from '../../../../component/Button/Button';
import { ErrorMessage, Form, Formik, useFormik } from 'formik';
import Pokedex from '../../../images/pokeball.png';
import '../../../../Styles/base/_auth-layout.scss';
import { logInValidation } from './logInValidation';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IUserValue } from '../../../../type/types';
import Loader from '../../../../component/Loader/Loader';

const initialValue = {
  email: '',
  password: '',
};

const Login = () => {
  const [isDataLoading, setIsDataLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (values: IUserValue) => {
    setIsDataLoading(true);

    try {
      const response = await axios.post(
        'http://localhost:5000/v3/user/login',
        values
      );
      localStorage.setItem('userEmail', response.data.email);
      localStorage.setItem('token', response.data.token);

      setTimeout(() => {
        setIsDataLoading(false);
        navigate('/pokemon');
      }, 1000);
    } catch (error) {
      alert(
        'Login failed: ' + (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <>
      {isDataLoading && <Loader />}
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
              <h1 className='authHeading'>Login to Pokedex</h1>
              <Formik
                initialValues={initialValue}
                validationSchema={logInValidation}
                onSubmit={handleSubmit}
              >
                {({ handleChange, handleBlur, values }) => (
                  <Form className='authForm'>
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

                    <Button
                      type='submit'
                      buttonName='Login'
                    />
                  </Form>
                )}
              </Formik>
              <h2 className='authHeading'>
                Don’t have an account?{' '}
                <NavLink
                  style={{ color: 'red' }}
                  to='/signup'
                >
                  Signup
                </NavLink>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
