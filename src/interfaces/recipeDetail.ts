export interface RecipeMetaProps {
  showIngredients: boolean;
}

export interface RecipeIngredientsProps {
  toggleIngredients: () => void;
  showIngredients: RecipeMetaProps["showIngredients"];
}
