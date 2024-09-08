import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { WishItem } from './shared/models/wishItem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  items:WishItem[] = [
    new WishItem('To Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself')  
  ];

  get visibleItems() : WishItem[]{
    let value = this.listFilter

    switch(Number(value)){
      case 0:
      default:
        return this.items
      
      case 1:
        return this.items.filter(item => !item.isComplete)

      case 2:
        return this.items.filter(item => item.isComplete)
    }
  }

  title = 'wishlist'
  newWishText = ''
  listFilter:String = '0'

  addNewWish(){
    this.items.push(new WishItem(this.newWishText))
    this.newWishText = ''
  }

  toggleItem(item : WishItem){
    item.isComplete = !item.isComplete
  }
}
