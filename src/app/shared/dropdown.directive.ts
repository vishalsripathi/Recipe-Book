import { Directive, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class Dropdown implements OnInit {
  @HostBinding('class.open') isOpen = false;
  constructor() {}
  ngOnInit() {}

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
