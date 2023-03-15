import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import { useParams, Link } from 'react-router-dom';
import { ADD_RECIPE } from '../utils/mutations';
import auth from '../utils/auth';

const AddRecipe = () => {
  const [userFormData, setUserFormData] = useState({ title: '', recipeId: '',ingredients: '', description: '', steps: '', image: ''});
  const [addRecipe, { error, data }] = useMutation(ADD_RECIPE);
  const { userId } = useParams();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const { data } = await addRecipe({
        variables: {
          user: userId,
          title: userFormData.title,
          recipeId: userFormData.recipeId,
          description: userFormData.description,
          steps: userFormData.steps.split(','),
          image: userFormData.image
        }
      });
    }
    catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      {auth.loggedIn() ? (
        <div className="row">
          <h4>Add Recipe</h4>
          {data ? (
            <p>
              Recipe Added {' '}
              <Link to={"/"}>back to homepage</Link>
            </p>
          ): (
            <form onSubmit={handleFormSubmit} className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input value={userFormData.title} onChange={handleChange} name="title" className="validate" placeholder="Title"/>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input value={userFormData.description} onChange={handleChange} name="description" className="validate" placeholder='Description'/>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input value={userFormData.recipeId} onChange={handleChange} name="recipeId" className="validate" placeholder='Ingredients'/>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input value={userFormData.steps} onChange={handleChange} name="steps" className="validate" placeholder='Steps'/>
                  <span class="helper-text" data-error="wrong" data-success="right">Separate with commas</span>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input value={userFormData.image} onChange={handleChange} name="image" className="validate" placeholder='Image'/>
                  <span class="helper-text" data-error="wrong" data-success="right">Paste image url</span>
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
      ) : (
        <div>You need to be logged in to acces this feature</div>
      )}
    </div>
  );
};

export default AddRecipe;