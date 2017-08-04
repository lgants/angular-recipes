import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';


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

  ngOnInit() {
  }

}
