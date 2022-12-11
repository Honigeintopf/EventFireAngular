import { Time } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  @Output() eventA = new EventEmitter<number>();
  number = 0;
  id = 0;
  idtimer: any;

  startEvent() {
    if (this.id == 0) {
      this.idtimer = setInterval(() => {
        this.eventA.emit(this.number);
        this.number = this.number + 1;
      }, 1000);
      this.id = 1;
    }
  }

  stopEvent() {
    if (this.id == 1) {
      clearInterval(this.idtimer);
      this.id = 0;
    }
  }
}
