import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrl: './profile-row.component.css'
})
export class ProfileRowComponent {

@Input() name = "Frederick"
@Input() img = "/assets/img/elk2.jpg"
}
