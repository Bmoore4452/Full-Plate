import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import { useParams } from 'react-router-dom';
// import { ADD_RECIPE } from '../utils/mutations';
import auth from '../utils/auth';

const AddRecipe = () => {
  // const [userFormData, setUserFormData] = useState({ title: '', ingredients: '', description: '', steps: [], image: ''});
  // const [addRecipe, { error, data }] = useMutation(ADD_RECIPE);

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setUserFormData({ ...userFormData, [name]: value });
  // };

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
    
  //   try {
  //     const { data } = await addRecipe({
  //       variables: { ...userFormData }
  //     });
  //   }
  //   catch (e) {
  //     console.error(e);
  //   }
  // };

  return (
    <div>
      {auth.loggedIn() ? (
        <div>Recipe Form</div>
      ) : (
        <div>You need to be logged in to acces this feature</div>
      )}
    </div>
  );
};

export default AddRecipe;