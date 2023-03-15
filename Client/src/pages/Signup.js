import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from "@apollo/client";
import { ADD_USER } from '../utils/mutations';
import auth from '../utils/auth';

const SignUp = () => {
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const { data } = await addUser({
        variables: { ...userFormData }
      });

      auth.login(data.addUser.token);
    }
    catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="row">
      <h4>Sign Up</h4>
      {data ? (
        <p>
          Thank You for signing up! head {' '}
          <Link to={"/"}>back to homepage</Link>
        </p>
      ): (
        <form onSubmit={handleFormSubmit} className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input value={userFormData.username} onChange={handleChange} name="username" type="text" className="validate" placeholder="Username"/>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input value={userFormData.email} onChange={handleChange} name="email" type="email" className="validate" placeholder="Email"/>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input value={userFormData.password} onChange={handleChange} name="password" type="password" className="validate" placeholder="Password"/>
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

export default SignUp;