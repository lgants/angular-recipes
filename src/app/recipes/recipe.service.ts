import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

// NOTE @Injectable required to inject a service into another service
@Injectable()
export class RecipeService {
  // removed to create custom Observable/Observer
  // recipeSelected = new EventEmitter<Recipe>();
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Hamburger',
      'This is a test', 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Bun', 1),
        new Ingredient('Lettuce', 1),
      ]
    ),
    new Recipe(
      'Pancakes',
      'This is another test', 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
      [
        new Ingredient('Butter', 1),
        new Ingredient('Flour', 1),
        new Ingredient('Carmel', 1),
        new Ingredient('Milk', 1),
      ]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    // slice without an argument will return a new recipe array rather than the same array
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
