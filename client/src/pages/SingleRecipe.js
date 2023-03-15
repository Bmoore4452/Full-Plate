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
                    <p>{recipe.description}</p>
                    <ul>
                        {recipe.ingredients.map((ingredient) => {
                            return (
                                <li>{ingredient}</li>
                            );
                        })}
                    </ul>
                    <ul>
                        {recipe.steps.map((step) => {
                            return (
                                <li>{step}</li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SingleRecipe;