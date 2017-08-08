import { Component, Output } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  // creating a custom featureSelected event listener
  // @Output() enables the parent component to listen for an event
  // @Output() featureSelected = new EventEmitter<string>();
  constructor(private dataStorageService: DataStorageService) {}

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      )
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }
}
