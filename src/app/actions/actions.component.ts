import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActionsService } from '../services/actions.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  @ViewChild('inputEl') inputEl: ElementRef;

  constructor(private _actionsService: ActionsService) { }
  ngOnInit() { }

  isArrowKeys(event: KeyboardEvent) {
    let k: number = event.keyCode;
    if (k) {
      event.preventDefault();
    }
  }

  onkeydown(event: KeyboardEvent) {
    switch (event.keyCode) {
      case 37: // this is the ascii of arrow left
        console.log("Arrowleft", event);
        this.addAction('←', event.keyCode);
        break;
      case 38: // this is the ascii of arrow down
        this.addAction('↑', event.keyCode);
        break;
      case 39: // this is the ascii of arrow right
        this.addAction('→', event.keyCode);
        break;
      case 40: // this is the ascii of arrow down
        this.addAction('↓', event.keyCode);
        break;
    }
  }
  addAction(key, code) {
    this.inputEl.nativeElement.value += key;
    this._actionsService.insertActions(code);
  }
  clear() {
    this.inputEl.nativeElement.value = null;
    this._actionsService.clearActions();
  }
}
