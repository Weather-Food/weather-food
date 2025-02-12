import React, { useState } from "react";
import styles from "../styles/RecipeDetail/RecipeDetail.module.scss";

import RecipeMeta from "../components/RecipeDetail/RecipeMeta";
import RecipeIngredients from "../components/RecipeDetail/RecipeIngredients";
import RecipeStepsList from "../components/RecipeDetail/RecipeStepsList";
import RecipeRecommendFoodsList from "../components/RecipeDetail/RecipeRecommendFoodsList";

const RecipeDetail = () => {
  const [showIngredients, setShowIngredients] = useState(true);

  const toggleIngredients = () => {
    setShowIngredients(!showIngredients);
  };

  return (
    <div className={styles.recipeDetail}>
      <div className={styles.recipeDetail__container}>
        <RecipeMeta showIngredients={showIngredients} />
        <hr />
        <RecipeIngredients
          toggleIngredients={toggleIngredients}
          showIngredients={showIngredients}
        />
        <RecipeStepsList />
        <RecipeRecommendFoodsList />
      </div>
    </div>
  );
};

export default RecipeDetail;
