import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from '../utils/mutations';
import auth from '../utils/auth';

const Login = () => {
  const [userFormData, setUserFormData] = useState({ username: '', email: ''});
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const { data } = await login({
        variables: { ...userFormData }
      });

      auth.login(data.login.token);
    }
    catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="row">
      <h4>Login</h4>
      {data ? (
        <p>
          You are signed in head {' '}
          <Link to={"/"}>back to homepage</Link>
        </p>
      ): (
        <form onSubmit={handleFormSubmit} className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input value={userFormData.email} onChange={handleChange} name="email" type="email" className="validate"/>
              <label for="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input value={userFormData.password} onChange={handleChange} name="password" type="password" className="validate"/>
              <label for="password">Password</label>
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
        </form>
      )}

      {error && (
        <div>
        {error.message}
        </div>
      )}
    </div>
  );
};

export default Login;