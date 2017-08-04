import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  // creating a custom featureSelected event listener
  // @Output() enables the parent component to listen for an event
  // @Output() featureSelected = new EventEmitter<string>();
}
