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

  // 추천 음식 mock 데이터
  const recommendedFoods = [
    {
      image: "/RecipeDetail/food1.jpg",
      name: "Spaghetti Carbonara",
      description: "Creamy Italian pasta with bacon and cheese.",
    },
    {
      image: "/RecipeDetail/food2.jpg",
      name: "Chicken Curry",
      description: "Spicy and flavorful Indian chicken curry.",
    },
    {
      image: "/RecipeDetail/food3.jpg",
      name: "Beef Tacos",
      description: "Mexican tacos with seasoned beef and fresh toppings.",
    },
    {
      image: "/RecipeDetail/food4.jpg",
      name: "Vegetable Stir Fry",
      description: "Healthy stir-fried vegetables with a tangy sauce.",
    },
  ];

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
      <div className={styles.recipeDetail__container}>
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
              <h2 className={styles.recipeDetail__subtitle}>
                {recipe.subtitle}
              </h2>
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
        <button className={styles.toggleButton} onClick={toggleIngredients}>
          {showIngredients ? "재료 접기 ▲" : "재료 펼치기 ▼"}
        </button>

        {showIngredients && (
          <div className={styles.recipeDetail__sectionIngredients}>
            <h3>재료</h3>
            <ul className={styles.ingredientsList}>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className={styles.ingredientItem}>
                  <span className={styles.ingredientIcon}>✔️</span>
                  <span className={styles.ingredientText}>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className={styles.recipeDetail__sectionSteps}>
          <h3>Steps</h3>
          <ol className={styles.centeredList}>
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

        {/* 추천 음식 섹션 */}
        <div className={styles.recommendedFoods}>
          <h3>추천 음식</h3>
          <div className={styles.recommendedFoodsList}>
            {recommendedFoods.map((food, index) => (
              <div key={index} className={styles.recommendedFood}>
                <img
                  src={food.image}
                  alt={food.name}
                  className={styles.recommendedFoodImage}
                />
                <h4>{food.name}</h4>
                <p>{food.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
