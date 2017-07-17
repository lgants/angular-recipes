import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // square brackets after recipes tells TS that recipes will be an array of instances of class Recipe
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test', 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
