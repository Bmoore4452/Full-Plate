import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_RECIPE } from "../utils/queries";

const SingleRecipe = () => {
    const { recipeId } = useParams();
    const { loading, data } = useQuery(QUERY_SINGLE_RECIPE, {
        variables: { recipeId: recipeId}
    });

    const recipe = data?.recipe || {};

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <h2>{recipe.title}</h2>
                    <img src={recipe.image} alt="food"/>
                    <h4>Description</h4>
                    <p>{recipe.description}</p>
                    <h4>Ingredients</h4>
                    <ol>
                        {recipe.ingredients.map((ingredient) => {
                            return (
                                <li>{ingredient}</li>
                            );
                        })}
                    </ol>
                    <h4>Steps</h4>
                    <ol>
                        {recipe.steps.map((step) => {
                            return (
                                <li>{step}</li>
                            );
                        })}
                    </ol>
                </div>
            )}
        </div>
    );
};

export default SingleRecipe;