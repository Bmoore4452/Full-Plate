import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_RECIPES } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_RECIPES);

  const recipeList = data?.recipes || [];

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {recipeList.map((recipe) => {
            return (
              <div key={recipe.title} className="row">
                <div className="col s12 m7">
                  <div className="card">
                    <div className="card-image">
                      <img src={recipe.image} alt="food"/>
                      <span className="card-title">{recipe.title}</span>
                    </div>
                    <div className="card-content">
                      <p>{recipe.description}</p>
                    </div>
                    <div className="card-action">
                      <Link>View Full Recipe</Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
