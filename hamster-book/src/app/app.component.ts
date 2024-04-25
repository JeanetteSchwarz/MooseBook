import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  profileTexts = [
    'Hi, I am Susanne',
    'Hello, this is Moose.',
    'Hi, my name is Frederick'
  ]

  profileImages = [
    '/assets/img/elk1.jpg',
    '/assets/img/elk2.jpg',
    '/assets/img/elk3.jpg'
  ]
}
