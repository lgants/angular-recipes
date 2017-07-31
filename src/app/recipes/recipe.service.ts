import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test', 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg'),
    new Recipe('Another Test Recipe', 'This is another test', 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg')
  ];

  getRecipes() {
    // slice without an argument will return a new recipe array rather than the same array
    return this.recipes.slice();
  }
}
