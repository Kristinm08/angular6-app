import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActionsService } from '../services/actions.service';
import { PointComponent } from '../point/point.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit, OnDestroy {
  @Input() size: number;
  readonly gridSize = 400;
  @ViewChild(PointComponent) pointChild;
  subsciption: Subsciption[];

  constructor(private _actionsService: ActionsService) {
  }

  ngOnInit() {
    this.subsciption.push(this._actionsService.playMethodCalled$.subscribe(
      () => {
        this.reset();
      }));
  }

  toArray(n: number) {
    if (!n) { return; }
    let arr: number[] = [];
    for (let i = 0; i < n; i++) {
      arr.push(i);
    }
    return arr;
  }

  play() {
    if (!this.size || !this._actionsService.actionsList.length) { return; }
    this.pointChild.move(this.calculateCoordinates());
    this.getRequest();
  }

  getRequest() {
    this.subsciption.push(this._actionsService.httpRequest().subscribe());
  }

  reset() {
    if (!this.pointChild) { return; }
    this.pointChild.move([[0, 0]]);
  }

  calculateCoordinates() {
    let actionsList: Array<any> = [];
    let x = 0;
    let y = 0;

    const step: number = Math.floor(this.gridSize / this.size);

    this._actionsService.actionsList.forEach(i => {
      switch (i) {
        case 37:
          x += -step;
          break;
        case 38:
          y += -step;
          break;
        case 39:
          x += +step;
          break;
        case 40:
          y += +step;
          break;
      }
      if (!this.inRange(x)) { x = 0; }
      if (!this.inRange(y)) { y = 0; }
      actionsList.push([x, y]);
    });
    return actionsList;
  }

  inRange(x): boolean {
    return x >= 0 && x <= this.gridSize;
  }
  
  ngOnDestroy():void{
    this.subscrition.forEach(i => i.unsubscribe());
  }
}
