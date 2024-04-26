import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddfriendService {

  names = ['Sven']
images = ['/assets/img/elk4.jpg']


  constructor() { }

  addFriend(name:string, image:string){
    this.names.push(name);
    this.images.push(image)
  }
}
