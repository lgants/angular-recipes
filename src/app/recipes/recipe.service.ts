import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a test', 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Bun', 1),
        new Ingredient('Lettuce', 1),
      ]
    ),
    new Recipe(
      'Another Test Recipe',
      'This is another test', 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Bun', 1),
        new Ingredient('Lettuce', 1),
      ]
    )
  ];

  // constructor(private slService: ShoppingListService) {}

  getRecipes() {
    // slice without an argument will return a new recipe array rather than the same array
    return this.recipes.slice();
  }

  // addIngredientsToShoppingList(ingredients: Ingredient[]) {
  //   this.slService.addIngredients(ingredients);
  // }
}
