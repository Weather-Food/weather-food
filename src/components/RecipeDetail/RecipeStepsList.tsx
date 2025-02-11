import React from "react";
import styles from "../../styles/RecipeDetail/RecipeStepsList.module.scss";
import { recipe } from "./mockRecipeData";

const RecipeStepsList = () => {
  return (
    <div className={styles.recipeDetail__sectionSteps}>
      <h3>조리순서</h3>
      <ol className={styles.stepsList}>
        {recipe.steps.map((step, index) => (
          <li key={index} className={styles.recipeStep}>
            <div className={styles.stepNumber}>{index + 1}</div>
            <div className={styles.stepContent}>
              <p className={styles.stepDescription}>{step.description}</p>
              {step.image && (
                <img
                  src={step.image}
                  alt={`Step ${index + 1}`}
                  className={styles.stepImage}
                />
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeStepsList;
