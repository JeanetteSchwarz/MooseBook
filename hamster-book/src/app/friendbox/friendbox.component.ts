import { Component } from '@angular/core';
import { AddfriendService } from '../addfriend.service';

@Component({
  selector: 'app-friendbox',
  templateUrl: './friendbox.component.html',
  styleUrl: './friendbox.component.css'
})
export class FriendboxComponent {

  constructor(public fs: AddfriendService) {}


}
