import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrl: './info-box.component.css'
})
export class InfoBoxComponent {
  @Input() text: string = '';
  @Input() img: string = '';
constructor() { }
}
