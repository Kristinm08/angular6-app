import { Component } from '@angular/core';

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.css']
})
export class PointComponent {

  constructor() { }

  move(actions: any) {
    if (!actions) {
      return;
    }
    let el = document.getElementById("pointEl");
    const length = actions.length;

    const keyframes = () => {
      const translateAactions = [];

      translateAactions.push({ transform: `translate(0px, 0px)` });

      for (let i = 0; i < actions.length; i++) {
        translateAactions.push({ transform: `translate(${actions[i][0]}px, ${actions[i][1]}px)` });
      }
      return translateAactions;
    };

    const options = (): KeyframeAnimationOptions => ({
      duration: 2000,
      easing: 'ease-in-out',
      fill: 'forwards'
    });

    el.animate(keyframes(), options());
  }
}
