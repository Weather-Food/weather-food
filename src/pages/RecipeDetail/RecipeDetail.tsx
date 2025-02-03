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
    author: {
      name: "John Doe",
      profileImage: "/RecipeDetail/food.jpg",
    },
    ingredients: [
      "1 cup of ingredient 1",
      "2 cups of ingredient 2",
      "1/2 cup of ingredient 3",
      "1 tbsp of ingredient 4",
    ],
    steps: [
      {
        description: "Do something with ingredient 1.",
        image: "/RecipeDetail/food.jpg",
      },
      {
        description: "Mix ingredient 2 and ingredient 3.",
        image: "/RecipeDetail/food.jpg",
      },
      {
        description: "Cook the mixture for 20 minutes.",
        image: "/RecipeDetail/food.jpg",
      },
      {
        description: "Add ingredient 4 and serve.",
        image: "/RecipeDetail/food.jpg",
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
            <h1 className={styles.recipeDetail__name}>{recipe.name}</h1>
            <h2 className={styles.recipeDetail__subtitle}>{recipe.subtitle}</h2>
            <div className={styles.recipeDetail__meta}>
              <p>Servings: {recipe.servings}</p>
              <p>Time: {recipe.time}</p>
              <button className={styles.favoriteButton}>찜</button>
            </div>
            <div className={styles.recipeDetail__author}>
              <img
                src={recipe.author.profileImage}
                alt={recipe.author.name}
                className={styles.recipeDetail__authorImage}
              />
              <p>{recipe.author.name}</p>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.toggleButton1} onClick={toggleIngredients}>
        {showIngredients ? "재료 접기" : "재료 펼치기"}
      </button>

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

      <div className={styles.recipeDetail__section}>
        <div className={styles.recipeDetail__sectionSteps}>
          <h3>Steps</h3>
          <ol>
            {recipe.steps.map((step, index) => (
              <li key={index} className={styles.recipeStep}>
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
      </div>
    </div>
  );
};

export default RecipeDetail;
