import React, { useState } from "react";
import styles from "./RecipeDetail.module.scss";

const RecipeDetail = () => {
  const [showIngredients, setShowIngredients] = useState(false);
  const [showSteps, setShowSteps] = useState(false);

  const recipe = {
    image: "/RecipeDetail/food.jpg",
    name: "Delicious Food",
    subtitle: "A tasty and healthy meal",
    servings: 4,
    time: "30 minutes",
    ingredients: [
      "1 cup of ingredient 1",
      "2 cups of ingredient 2",
      "1/2 cup of ingredient 3",
      "1 tbsp of ingredient 4",
    ],
    steps: [
      {
        description: "Step 1: Do something with ingredient 1.",
        image: "/path/to/step1-image.jpg",
      },
      {
        description: "Step 2: Mix ingredient 2 and ingredient 3.",
        image: "/path/to/step2-image.jpg",
      },
      {
        description: "Step 3: Cook the mixture for 20 minutes.",
        image: "/path/to/step3-image.jpg",
      },
      {
        description: "Step 4: Add ingredient 4 and serve.",
        image: "/path/to/step4-image.jpg",
      },
    ],
  };

  const toggleIngredients = () => {
    setShowIngredients(!showIngredients);
    setShowSteps(false); // 요리 방법 섹션을 닫음
  };

  const toggleSteps = () => {
    setShowSteps(!showSteps);
    setShowIngredients(false); // 재료 섹션을 닫음
  };

  return (
    <div className={styles.recipeDetail}>
      <div className={styles.recipeDetail__header}>
        <div
          className={`${styles.recipeDetail__contain} ${
            showIngredients || showSteps ? styles.expanded : ""
          }`}
        >
          <img
            src={recipe.image}
            alt={recipe.name}
            className={styles.recipeDetail__image}
          />
          <div className={styles.recipeDetail__info}>
            <h1 className="recipe-name">{recipe.name}</h1>
            <h2 className="recipe-subtitle">{recipe.subtitle}</h2>
            <div className="recipe-meta">
              <p>Servings: {recipe.servings}</p>
              <p>Time: {recipe.time}</p>
              <button className="favorite-button">찜</button>
            </div>
          </div>
        </div>
        <button
          className={`${styles.toggleButton}`}
          onClick={toggleIngredients}
        >
          {showIngredients ? "재료 접기" : "재료 펼치기"}
        </button>
        <button className={styles.toggleButton} onClick={toggleSteps}>
          {showSteps ? "요리 방법 접기" : "요리 방법 펼치기"}
        </button>
      </div>
      <div className={styles.recipeDetail__section}>
        {showIngredients && (
          <div className={styles.recipeDetail__sectionIngredients}>
            <h3>Ingredients</h3>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        )}
        {showSteps && (
          <div className={styles.recipeDetail__sectionSteps}>
            <h3>Steps</h3>
            <ol>
              {recipe.steps.map((step, index) => (
                <li key={index}>
                  <p>{step.description}</p>
                  <img
                    src={step.image}
                    alt={`Step ${index + 1}`}
                    className={styles.stepImage}
                  />
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeDetail;
