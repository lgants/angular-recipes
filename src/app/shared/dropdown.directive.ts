import { Directive, HostListener, HostBinding } from '@angular/core';

// need to add @Directive to turn this into a directive
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor() { }

  // @HostBinding enables binding to properties the directive is placed on
  // class is an array of all the classes; open is the class we're changing dynamically
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
