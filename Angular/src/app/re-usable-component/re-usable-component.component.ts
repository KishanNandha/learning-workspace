import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-re-usable-component',
  templateUrl: './re-usable-component.component.html',
  styleUrls: ['./re-usable-component.component.css']
})
export class ReUsableComponentComponent {
  //for input
  @Input("selected")
  isSelected;

  //for output
  @Output('changeEvent')
  change = new EventEmitter();

  onClick() {
    this.change.emit();
  }
}
