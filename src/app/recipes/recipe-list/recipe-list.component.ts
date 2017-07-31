import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // custom events don't propogate up
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  // NOTE square brackets after recipes tells TS that recipes will be an array of instances of class Recipe
  // NOTE relocated to service
  // recipes: Recipe[] = [
  //   new Recipe('Test Recipe', 'This is a test', 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg'),
  //   new Recipe('Another Test Recipe', 'This is another test', 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg')
  // ];
  recipes: Recipe[];

  // NOTE need to inject service here
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
