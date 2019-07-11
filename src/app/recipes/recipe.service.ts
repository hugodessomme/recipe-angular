import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Burger",
      "A Delicious Burger",
      "https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_960_720.jpg",
      [new Ingredient("Meat", 1), new Ingredient("French Fries", 20)]
    ),
    new Recipe(
      "Fish'n'Chips",
      "Here is a perfect fish'n'chips",
      "https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_960_720.jpg",
      [new Ingredient("Fish", 1), new Ingredient("French Fries", 10)]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return [...this.recipes];
  }

  addIngredientsToShoppinglist(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
