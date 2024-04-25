import { Component } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrl: './proposals.component.css'
})
export class ProposalsComponent {
names = ['Susi', 'Sven', 'Ingo', 'Monika', 'Anette']
images = ['/assets/img/elk4.jpg', '/assets/img/elk5.jpg', '/assets/img/elk6.jpg', '/assets/img/elk3.jpg', '/assets/img/elk2.jpg']
}
