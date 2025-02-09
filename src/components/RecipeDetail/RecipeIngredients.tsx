import React from "react";
import styles from "./RecipeIngredients.module.scss";
import { FaCheck } from "react-icons/fa";
import { recipe } from "./recipe";

interface RecipeIngredientsProps {
  toggleIngredients: () => void;
  showIngredients: boolean;
}

const RecipeIngredients: React.FC<RecipeIngredientsProps> = ({
  toggleIngredients,
  showIngredients,
}) => {
  return (
    <>
      <div className={styles.recipeDetail__sectionButtons}>
        <button className={styles.toggleButton} onClick={toggleIngredients}>
          {showIngredients ? "재료 접기 ▲" : "재료 펼치기 ▼"}
        </button>
      </div>
      {showIngredients && (
        <div className={styles.recipeDetail__sectionIngredients}>
          <h3>재료</h3>

          {/* 재료 섹션 */}
          <div className={styles.ingredientsSection}>
            <h4 className={styles.sectionTitle}>재료</h4>
            <ul className={styles.seasoningList}>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className={styles.ingredientItem}>
                  <span>
                    <FaCheck className={styles.ingredientIcon} />
                  </span>
                  <span className={styles.ingredientText}>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 양념 섹션 */}
          <div className={styles.seasoningSection}>
            <h4 className={styles.sectionTitle}>양념</h4>
            <ul className={styles.seasoningList}>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className={styles.ingredientItem}>
                  <span>
                    <FaCheck className={styles.ingredientIcon} />
                  </span>
                  <span className={styles.ingredientText}>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeIngredients;
