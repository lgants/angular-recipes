import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // NOTE @Input enables binding this component property from outside
  // NOTE property is bound in recipe-list.component.html (i.e. [recipe]="recipeElement")
  @Input() recipe: Recipe;
  // NOTE void denotes nothing is passed with event
  // @Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipeService: RecipeService) { }

  onSelected() {
    // NOTE moved behavior to recipe service
    // this.recipeSelected.emit();
    this.recipeService.recipeSelected.emit(this.recipe);
  }

  ngOnInit() {
  }

}
