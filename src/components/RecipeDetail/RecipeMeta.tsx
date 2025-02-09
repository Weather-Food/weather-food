import React from "react";
import styles from "./RecipeMeta.module.scss";
import { CiStar } from "react-icons/ci";
import { recipe } from "./recipe";

const RecipeMeta = ({ showIngredients }: any) => {
  return (
    <div className={styles.recipeDetail__header}>
      <div
        className={`${styles.recipeDetail__contain} ${
          showIngredients ? styles.expanded : ""
        }`}
      >
        <h1 className={styles.recipeDetail__name}>{recipe.name}</h1>
        <img
          src={recipe.image}
          alt={recipe.name}
          className={styles.recipeDetail__image}
        />
        <div className={styles.recipeDetail__info}>
          <h2 className={styles.recipeDetail__subtitle}>{recipe.subtitle}</h2>
          <div className={styles.recipeDetail__meta}>
            <div className={styles.recipeDetail__servings}>
              <p>Serving</p>
              {recipe.servings}인분
            </div>
            <div className={styles.recipeDetail__servings}>
              <p>Cook</p>
              {recipe.time}
            </div>
            <button className={styles.favoriteButton}>
              <CiStar className={styles.favoriteButtonIcon} /> 아무나
            </button>
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
  );
};

export default RecipeMeta;
