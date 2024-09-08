import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { WishItem } from './shared/models/wishItem';
import { FormsModule } from '@angular/forms';


const filters = [
  (item:WishItem) => true,
  (item:WishItem) => !item.isComplete,
  (item:WishItem) => item.isComplete
]

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

  title = 'wishlist'
  newWishText = ''
  listFilter:any = '0'

  get visibleItems() : WishItem[]{
    return this.items.filter(filters[this.listFilter])
  }

  
  addNewWish(){
    this.items.push(new WishItem(this.newWishText))
    this.newWishText = ''
  }

  toggleItem(item : WishItem){
    item.isComplete = !item.isComplete
  }
}
