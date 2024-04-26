import { Component } from '@angular/core';

@Component({
  selector: 'app-friendbox',
  templateUrl: './friendbox.component.html',
  styleUrl: './friendbox.component.css'
})
export class FriendboxComponent {

names = ['Susi', 'Sven', 'Ingo', 'Monika', 'Anette']
images = ['/assets/img/elk4.jpg', '/assets/img/elk5.jpg', '/assets/img/elk6.jpg', '/assets/img/elk3.jpg', '/assets/img/elk2.jpg']

}
