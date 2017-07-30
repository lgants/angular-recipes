import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // @Input enables binding this component property from outside
  // property is bound in recipe-list.component.html (i.e. [recipe]="recipeElement")
  @Input() recipe: Recipe;
  // void denotes nothing is passed with event
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  onSelected() {
    this.recipeSelected.emit();
  }

  ngOnInit() {
  }

}
