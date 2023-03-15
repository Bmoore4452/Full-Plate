import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import { ADD_RECIPE } from '../utils/mutations';
import auth from '../utils/auth';

const AddRecipe = () => {
  const [userFormData, setUserFormData] = useState({ title: '', ingredients: '', description: '', steps: [], image: ''});
  const [addRecipe, { error, data }] = useMutation(ADD_RECIPE);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const { data } = await addRecipe({
        variables: { ...userFormData }
      });
    }
    catch (e) {
      console.error(e);
    }
  };

  return (
    <div>Hi</div>
  );
};

export default AddRecipe;